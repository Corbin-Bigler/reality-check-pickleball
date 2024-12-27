<script lang="ts">
    import { Card, Button, Label, Input, Checkbox, P, Alert, Textarea } from "flowbite-svelte";
    import AuthenticationState from "../state/AuthenticationState";
    import NavigationState from "../state/NavigationState";
    import type { User } from "firebase/auth";
    import type { UserData } from "../model/UserData";
    import { get } from "svelte/store";
    import { onMount } from "svelte";
    import FunctionsDs from "../data-sources/FunctionsDs";
    import { Status } from "../model/Status";
    import { appError, AppError } from "../model/AppError";
    import type { League } from "../model/League";
    import FirestoreDs, { type BulkLeagues } from "../data-sources/FirestoreDs";

    let showCreateLeague = false;
    let user = get(AuthenticationState.user)!;
    let userData = get(AuthenticationState.userData)!;
    let leagues: {key: string, value: League}[] | null = null

    let name = ""
    let description = ""
    let startDate = new Date()
    let creating = false

    const endDate = (() => {
        const tempDate = new Date(startDate);
        tempDate.setDate(startDate.getDate() + 10);
        return tempDate;
    })();    
    
    let error: string | null = null;

    async function updateLeagues() {
        let leagueMap = await FirestoreDs.getLeagues(userData.leagues.map((e)=>e.id))
        leagues = Object.entries(leagueMap).map(([key, value]) => ({ key, value }));
    }
    onMount(async ()=>{
        updateLeagues()
    })

    function signOut() {
        AuthenticationState.signOut();
    }
    async function createLeague() {
        if (!name || !description || creating) return
        creating = true

        let response = await FunctionsDs.createLeague(name, description, startDate, endDate);
        if (response.status != Status.success) {
            error = appError(response.status);
            creating = false
            return
        }
        await AuthenticationState.getUserData();
        userData = get(AuthenticationState.userData)!;
        updateLeagues()
        showCreateLeague = false
        creating = false
    }
</script>

<div class="flex flex-col space-y-5 items-center">
    {#if showCreateLeague}
        <Card>
            <form class="flex flex-col space-y-6" on:submit|preventDefault={createLeague}>
                <h3 class="text-xl font-medium text-gray-900 dark:text-white">Create League</h3>
                <Label class="space-y-2">
                    <span>Name</span>
                    <Input type="text" name="name" placeholder="" required bind:value={name} />
                </Label>
                <Label class="space-y-2">
                    <span>Description</span>
                    <Textarea name="description" placeholder="" rows={4} required bind:value={description}/>
                </Label>

                <div class="flex flex-row space-x-2">
                    <Button type="button" class="w-full" outline on:click={()=>{showCreateLeague = false}}>Cancel</Button>
                    <Button type="submit" class="w-full" on:click={createLeague}>Create League</Button>
                </div>
            </form>
        </Card>
    {:else}
        {#if userData.leagues.length == 0}
            <p>You are not a part of any leagues</p>
        {:else}
            {#each leagues ?? [] as league}
                <button class="cursor-pointer" on:click={()=>{NavigationState.navigate("/league/" + league.key)}}>
                    <Card>
                        <div class="flex w-64">
                            <p class="w-20 text-left" >{league.value.name}</p>
                            <p>{league.value.description}</p>
                        </div>
                    </Card>
                </button>
            {/each}
        {/if}
        {#if userData.admin}
            <Button
                type="button"
                class="w-48"
                on:click={() => {
                    showCreateLeague = true;
                }}>Create League</Button
            >
        {/if}
        <Button type="button" class="w-48" on:click={signOut}>Sign Out</Button>
    {/if}
</div>
