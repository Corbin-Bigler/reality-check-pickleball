<script lang="ts">
    import { Card, Button, Label, Input, Checkbox, P, Alert } from "flowbite-svelte";
    import { CloseOutline } from "flowbite-svelte-icons";
    import AuthenticationState from "../state/AuthenticationState";
    import NavigationState from "../state/NavigationState";
    import { fade, slide } from "svelte/transition";
    import AuthenticationDs from "../data-sources/AuthenticationDs";
    import { appError, AppError, errorMessage } from "../model/AppError";
    import type { User } from "firebase/auth";
    import type { UserData } from "../model/UserData";
    import FunctionsDs from "../data-sources/FunctionsDs";

    let loggingIn = false
    let showLogIn = true;
    let email = "";
    let password = "";
    let error: string | null = null;

    function closeAlert() {error = null}
    function clickSignIn() {
        NavigationState.removeParam("create");
        error = null
    }
    function clickCreateAccount() {
        NavigationState.setParam("create", "true");
        error = null
    }
    async function signIn() {
        if (!email || !password || loggingIn) return
        try {
            await AuthenticationState.signIn(email, password);
        } catch (err) {
            error = errorMessage(appError(err));
        }
    }
    async function signUp() {
        if (!email || !password) return
        try {
            await AuthenticationState.createAccount(email, password);
        } catch (err) {
            error = errorMessage(appError(err));
        }
    }
    NavigationState.params.subscribe((value) => {
        showLogIn = value.get("create") != "true";
    });
</script>

<div class="flex flex-col space-y-4">
    {#if error != null}
        <div transition:fade={{delay: 100}}>
            <Alert>
                <div class="flex justify-between">
                    {error}
                    <button on:click={closeAlert}><CloseOutline /></button>
                </div>
            </Alert>
        </div>
    {/if}

    <div class="grid place-items-center" style="grid-template-areas: 'inner-div';">
        {#if showLogIn}
            <div class="w-96 z-0" style="grid-area: inner-div;" transition:fade={{ duration: 100 }}>
                <Card>
                    <form class="flex flex-col space-y-6" on:submit|preventDefault>
                        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                        <Label class="space-y-2">
                            <span>Email</span>
                            <Input
                                type="email"
                                name="email"
                                placeholder="name@company.com"
                                required
                                bind:value={email}
                            />
                        </Label>
                        <Label class="space-y-2">
                            <span>Your password</span>
                            <Input type="password" name="password" placeholder="•••••" required bind:value={password} />
                        </Label>
                        <Button type="submit" class="w-full" on:click={signIn}>Login to your account</Button>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered?
                            <button
                                on:click={clickCreateAccount}
                                class="text-primary-700 hover:underline dark:text-primary-500"
                            >
                                Create account
                            </button>
                        </div>
                    </form>
                </Card>
            </div>
        {:else}
            <div class="w-96 z-10 space-y-4" style="grid-area: inner-div;" transition:fade={{ duration: 100 }}>
                <Card>
                    <form class="flex flex-col space-y-6" on:submit|preventDefault>
                        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Create an account</h3>
                        <Label class="space-y-2">
                            <span>Email</span>
                            <Input
                                type="email"
                                name="email"
                                placeholder="name@company.com"
                                required
                                bind:value={email}
                            />
                        </Label>
                        <Label class="space-y-2">
                            <span>Your password</span>
                            <Input type="password" name="password" placeholder="•••••" required bind:value={password} />
                        </Label>

                        <Button type="submit" class="w-full" on:click={signUp}>Create an account</Button>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Already registered? <button
                                on:click={clickSignIn}
                                class="text-primary-700 hover:underline dark:text-primary-500"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </Card>
            </div>
        {/if}
    </div>
</div>
