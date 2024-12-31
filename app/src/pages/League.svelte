<script lang="ts">
    import { get } from "svelte/store";
    import NavigationState from "../state/NavigationState";
    import Page404 from "./Page404.svelte";
    import type { League } from "../model/League";
    import { onMount } from "svelte";
    import FirestoreDs, { type BulkInvites, type BulkUserData } from "../data-sources/FirestoreDs";
    import { Alert, Button, Card, NumberInput, Spinner, Toggle } from "flowbite-svelte";
    import AuthenticationState from "../state/AuthenticationState";
    import {
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
        Label,
        Input,
    } from "flowbite-svelte";
    import FunctionsDs from "../data-sources/FunctionsDs";
    import { Status } from "../model/Status";
    import { AppError, appError, errorMessage } from "../model/AppError";
    import type { Invite } from "../model/Invite";
    import type { UserData } from "../model/UserData";
    import type { DocumentReference } from "firebase/firestore";
    import { fade } from "svelte/transition";
    import { CloseOutline } from "flowbite-svelte-icons";
    import type { Game } from "../model/Game";

    let email = "";
    let matches = 3;
    let duos = true;
    let id: string | null;
    let loading = true;
    let league: League | null = null;
    let showSchedule = false;
    let showAdd = false;
    let showEditGame: Game | null;
    let scores: { first: number; second: number }[] = [];
    let editing = false;
    let error: AppError | null;
    let invites: BulkInvites = {};
    let userDatas: BulkUserData = {};
    let emails: { [id: string]: string } = {};

    function setId(pathname: string) {
        const pathSegments = pathname.split("/").filter(Boolean);
        id = pathSegments[1] || null;
    }
    setId(get(NavigationState.path).pathname);

    NavigationState.path.subscribe((value) => {
        setId(value.pathname);
    });

    async function removeLeaguePlayer(player: DocumentReference) {
        if (editing || !id) return;
        editing = true;
        console.log("asdf");
        let response = await FunctionsDs.removeLeaguePlayer(player, id);
        if (response.status != Status.success) {
            error = appError(response.status);
            editing = false;
            return;
        }
        await getLeagueData();
    }
    async function addLeaguePlayer() {
        if (editing || !id) return;
        editing = true;
        let response = await FunctionsDs.addLeaguePlayer(email, id);
        if (response.status != Status.success) {
            error = appError(response.status);
            editing = false;
            return;
        }
        await getLeagueData();
        editing = false;
        closeAddPlayers();
    }
    async function scheduleGames() {
        if (editing || !id) return;
        editing = true;
        let response = await FunctionsDs.scheduleGames(id, matches, duos);
        console.log(response);
        if (response.status != Status.success) {
            error = appError(response.status);
            editing = false;
            return;
        }
        await getLeagueData();
        editing = false;
        closeAddPlayers();
    }
    async function updateGame() {
        console.log(scores);
        // console.log(firstScore);
        // console.log(secondScore);
    }
    async function getLeagueData() {
        if (!id) return;

        league = await FirestoreDs.getLeague(id);
        if (!league) return;

        const userIds: string[] = [];
        const inviteIds: string[] = [];
        for (const playerRef of league.players) {
            const collectionPath = playerRef.path.split("/")[0];
            const docId = playerRef.id;

            if (collectionPath === "users") {
                userIds.push(docId);
            } else if (collectionPath === "invites") {
                inviteIds.push(docId);
            }
        }

        const promises = [];
        if (inviteIds.length > 0) {
            promises.push(FirestoreDs.getInvites(inviteIds));
        } else {
            promises.push(Promise.resolve([]));
        }

        if (userIds.length > 0) {
            promises.push(FirestoreDs.getUserDatas(userIds));
        } else {
            promises.push(Promise.resolve([]));
        }

        promises.push(FunctionsDs.getBulkEmails(userIds));
        const [bulkInvites, bulkUserData, bulkEmails] = await Promise.all(promises);

        let bulkEmailData: { uid: string; email: string }[] = bulkEmails.data;
        emails = bulkEmailData.reduce(
            (acc, item) => {
                acc[item.uid] = item.email;
                return acc;
            },
            {} as { [id: string]: string }
        );
        invites = bulkInvites;
        userDatas = bulkUserData;
    }

    onMount(async () => {
        await getLeagueData();
        loading = false;
    });

    function teamOf(game: Game): string | null {
        let uid = AuthenticationState.uid ?? "";
        if (game.a.map((e) => e.id).includes(uid)) return "a";
        else if (game.b.map((e) => e.id).includes(uid)) return "b";
        return null;
    }
    function emailOf(ref: DocumentReference): string | null {
        const collectionPath = ref.path.split("/")[0];
        if (collectionPath === "users") {
            return emails[ref.id];
        } else if (collectionPath === "invites") {
            return ""
            // return invites[ref.id].email;
        }
        return null;
    }
    function phoneOf(ref: DocumentReference): string {
        const collectionPath = ref.path.split("/")[0];
        if (collectionPath === "users") {
            return userDatas[ref.id]["phone"];
        } else if (collectionPath === "invites") {
            return "";
        }
        return "";
    }
    function nameOf(ref: DocumentReference): string | null {
        const collectionPath = ref.path.split("/")[0];
        if (collectionPath === "users") {
            return userDatas[ref.id]["first-name"] + " " + userDatas[ref.id]["last-name"];
        } else if (collectionPath === "invites") {
            return invites[ref.id].email;
        }
        return null;
    }
    function rankOf(ref: DocumentReference): string {
        const collectionPath = ref.path.split("/")[0];
        if (collectionPath === "users") {
            return "";
        } else if (collectionPath === "invites") {
            return "";
        }
        return "";
    }

    function clickScheduleGames() {
        NavigationState.setParam("overlay", "schedule");
    }
    function clickAddPlayer() {
        NavigationState.setParam("overlay", "add");
    }
    function closeAddPlayers() {
        NavigationState.removeParam("overlay");
    }
    function canEdit(): Boolean {
        if (!league) return false;
        return (
            league.organizers.map((e) => e.id).includes(AuthenticationState.uid ?? "") ||
            get(AuthenticationState.userData)?.admin == true
        );
    }

    NavigationState.params.subscribe((value) => {
        showAdd = value.get("overlay") == "add";
        showSchedule = value.get("overlay") == "schedule";
    });
</script>

{#if loading}
    <Spinner />
{:else if id != null && league != null}
    <div class="flex flex-col space-y-5 items-center">
        {#if error != null}
            <div class="w-full" transition:fade={{ delay: 100 }}>
                <Alert>
                    <div class="flex justify-between">
                        {errorMessage(error)}
                        <button
                            on:click={() => {
                                error = null;
                            }}><CloseOutline /></button
                        >
                    </div>
                </Alert>
            </div>
        {/if}

        {#if showAdd && canEdit()}
            <Card>
                <form class="flex flex-col space-y-6" on:submit|preventDefault={addLeaguePlayer}>
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">Add Player</h3>
                    <Label class="space-y-2">
                        <span>Email</span>
                        <Input type="text" name="email" placeholder="" required bind:value={email} />
                    </Label>

                    <div class="flex flex-row space-x-2">
                        <Button type="button" class="w-full" outline on:click={closeAddPlayers}>Cancel</Button>
                        <Button type="submit" class="w-full" on:click={addLeaguePlayer}>Add</Button>
                    </div>
                </form>
            </Card>
        {:else if showSchedule && canEdit()}
            <Card>
                <form class="flex flex-col space-y-6" on:submit|preventDefault={scheduleGames}>
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">Schedule Games</h3>
                    <Label class="space-y-2">
                        <span>Required Matches</span>
                        <NumberInput required bind:value={matches} />
                    </Label>
                    <Toggle bind:checked={duos}>Duos</Toggle>

                    <div class="flex flex-row space-x-2">
                        <Button type="button" class="w-full" outline on:click={closeAddPlayers}>Cancel</Button>
                        <Button type="submit" class="w-full" on:click={scheduleGames}>Schedule</Button>
                    </div>
                </form>
            </Card>
        {:else if showEditGame != null && canEdit()}
            <Card>
                <form class="flex flex-col space-y-6" on:submit|preventDefault={updateGame}>
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">Edit Game</h3>
                    <Table>
                        <TableHead>
                            <TableHeadCell>Match</TableHeadCell>
                            <TableHeadCell>{teamOf(showEditGame) != null ? "Your Score" : "A Team Score"}</TableHeadCell
                            >
                            <TableHeadCell
                                >{teamOf(showEditGame) != null ? "Opponent Score" : "B Team Score"}</TableHeadCell
                            >
                        </TableHead>
                        <TableBody tableBodyClass="divide-y">
                            {#each Array.from({ length: showEditGame["required-matches"] }, (_, i) => i) as match}
                                <TableBodyRow>
                                    <TableBodyCell>{match}</TableBodyCell>
                                    <TableBodyCell>
                                        <NumberInput required bind:value={scores[match].first} />
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <NumberInput required bind:value={scores[match].second} />
                                    </TableBodyCell>
                                </TableBodyRow>
                            {/each}
                        </TableBody>
                    </Table>

                    <div class="flex flex-row space-x-2">
                        <Button
                            type="button"
                            class="w-full"
                            outline
                            on:click={() => {
                                showEditGame = null;
                            }}>Cancel</Button
                        >
                        <Button type="submit" class="w-full" on:click={updateGame}>Complete</Button>
                    </div>
                </form>
            </Card>
        {:else}
            <Card size="xl" class="w-full">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{league.name}</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">{league.description}</p>

                <div class="flex flex-col space-y-4">
                    {#if canEdit()}
                        <div class="flex w-full justify-end space-x-4">
                            <Button outline type="button" on:click={clickScheduleGames}>Schedule Games</Button>
                            <Button type="button" on:click={clickAddPlayer}>Add Player</Button>
                        </div>
                    {/if}
                    <Table hoverable={league.players.length > 0}>
                        <TableHead defaultRow={false}>
                            <tr>
                                <TableHeadCell colspan={canEdit() ? 5 : 4}>Players</TableHeadCell>
                            </tr>
                            <tr>
                                <TableHeadCell>Rank</TableHeadCell>
                                <TableHeadCell>Name</TableHeadCell>
                                <TableHeadCell>Email</TableHeadCell>
                                <TableHeadCell>Phone</TableHeadCell>
                                {#if canEdit()}
                                    <TableHeadCell>
                                        <span class="sr-only">Edit</span>
                                    </TableHeadCell>
                                {/if}
                            </tr>
                        </TableHead>
                        <TableBody tableBodyClass="divide-y">
                            {#if league.players.length > 0}
                                {#each league.players as playerRef}
                                    <TableBodyRow>
                                        <TableBodyCell>{rankOf(playerRef)}</TableBodyCell>
                                        <TableBodyCell>{nameOf(playerRef)}</TableBodyCell>
                                        <TableBodyCell>{emailOf(playerRef)}</TableBodyCell>
                                        <TableBodyCell>{phoneOf(playerRef)}</TableBodyCell>
                                        {#if canEdit()}
                                            <TableBodyCell>
                                                <button
                                                    on:click={() => {
                                                        removeLeaguePlayer(playerRef);
                                                    }}
                                                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                                    >Remove</button
                                                >
                                            </TableBodyCell>
                                        {/if}
                                    </TableBodyRow>
                                {/each}
                            {:else}
                                <TableBodyRow>
                                    <TableBodyCell colspan={canEdit() ? 5 : 4}>No players in this league</TableBodyCell>
                                </TableBodyRow>
                            {/if}
                        </TableBody>
                    </Table>
                    <Table hoverable={league.games.length > 0}>
                        <TableHead defaultRow={false}>
                            <tr>
                                <TableHeadCell colspan={canEdit() ? 5 : 4}>Games</TableHeadCell>
                            </tr>
                            <tr>
                                <TableHeadCell>Seed</TableHeadCell>
                                <TableHeadCell>A Team</TableHeadCell>
                                <TableHeadCell>B Team</TableHeadCell>
                                <TableHeadCell>Score</TableHeadCell>
                                {#if canEdit()}
                                    <TableHeadCell>
                                        <span class="sr-only">Score</span>
                                    </TableHeadCell>
                                {/if}
                            </tr>
                        </TableHead>
                        <TableBody tableBodyClass="divide-y">
                            {#if league.games.length > 0}
                                {#each league.games as game}
                                    <TableBodyRow>
                                        <TableBodyCell></TableBodyCell>
                                        <TableBodyCell>{game.a.map((e) => nameOf(e)).join(", ")}</TableBodyCell>
                                        <TableBodyCell>{game.b.map((e) => nameOf(e)).join(", ")}</TableBodyCell>
                                        <TableBodyCell></TableBodyCell>
                                        {#if canEdit()}
                                            <TableBodyCell>
                                                <button
                                                    on:click={() => {
                                                        showEditGame = game;
                                                        scores = Array.from(
                                                            { length: showEditGame["required-matches"] },
                                                            () => ({
                                                                first: 0,
                                                                second: 0,
                                                            })
                                                        );
                                                    }}
                                                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                                    >Score</button
                                                >
                                            </TableBodyCell>
                                        {/if}
                                    </TableBodyRow>
                                {/each}
                            {:else}
                                <TableBodyRow>
                                    <TableBodyCell colspan={canEdit() ? 5 : 4}
                                        >No games have been scheduled</TableBodyCell
                                    >
                                </TableBodyRow>
                            {/if}
                        </TableBody>
                    </Table>
                </div>
            </Card>
        {/if}
        {#if AuthenticationState.isLoggedIn}
            <div class="flex space-x-4">
                <Button
                    outline
                    type="button"
                    on:click={() => {
                        NavigationState.navigate("/dashboard");
                    }}>Dashboard</Button
                >
                <Button
                    type="button"
                    on:click={() => {
                        AuthenticationState.signOut();
                    }}>Sign Out</Button
                >
            </div>
        {/if}
    </div>
{:else}
    <Page404 />
{/if}
