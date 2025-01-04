<script lang="ts">
    import { Card, Button, Label, Input, Checkbox, P, Alert } from "flowbite-svelte";
    import { CloseOutline } from "flowbite-svelte-icons";
    import { fade, slide } from "svelte/transition";
    import PhoneInput from "../components/PhoneInput.svelte";
    import FirestoreDs from "../data-sources/FirestoreDs";
    import AuthenticationDs from "../data-sources/AuthenticationDs";
    import AuthenticationState from "../state/AuthenticationState";
    import { get } from "svelte/store";
    import { appError, errorMessage } from "../model/AppError";

    let firstName = "";
    let lastName = "";
    let phone = "";
    let error: string | null = null;

    async function updateUserData() {
        if (!firstName || !lastName || !phone) return

        try {
            let uid = get(AuthenticationState.user)?.uid
            if(uid == null) return 
            await AuthenticationState.updateUserData({phone: phone, "first-name": firstName, "last-name": lastName});
        } catch (err) {
            console.error(err)
            error = errorMessage(appError(err));
        }
    }
    function closeAlert() {
        error = null;
    }
</script>

<div class="flex flex-col space-y-4 items-center">
    {#if error != null}
        <div transition:fade={{ delay: 100 }}>
            <Alert>
                <div class="flex justify-between">
                    {error}
                    <button on:click={closeAlert}><CloseOutline /></button>
                </div>
            </Alert>
        </div>
    {/if}

    <div class="grid place-items-center" style="grid-template-areas: 'inner-div';">
        <div class="w-96 z-0" style="grid-area: inner-div;">
            <Card>
                <form class="flex flex-col space-y-6" on:submit|preventDefault={updateUserData}>
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">Complete Account</h3>
                    <div class="flex space-x-2">
                        <Label class="space-y-2">
                            <span>First Name</span>
                            <Input type="text" name="first-name" placeholder="" required bind:value={firstName} />
                        </Label>
                        <Label class="space-y-2">
                            <span>Last Name</span>
                            <Input type="text" name="last-name" placeholder="" required bind:value={lastName} />
                        </Label>
                    </div>
                    <Label class="space-y-2">
                        <span>Phone Number</span>
                        <PhoneInput bind:value={phone}/>
                    </Label>
                    <Button type="submit" class="w-full" on:click={updateUserData}>Complete Account</Button>
                </form>
            </Card>
        </div>
    </div>

    <Button
    class="w-48"
    type="button"
    on:click={() => {
        AuthenticationState.signOut();
    }}>Sign Out</Button
>

</div>
