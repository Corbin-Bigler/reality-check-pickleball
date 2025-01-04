<script lang="ts">
    import { onMount } from "svelte";
    import "./app.css";
    import Dashboard from "./pages/Dashboard.svelte";
    import Landing from "./pages/Landing.svelte";
    import NavigationState from "./state/NavigationState";
    import Page404 from "./pages/Page404.svelte";
    import type { User } from "firebase/auth";
    import AuthenticationState from "./state/AuthenticationState";
    import AuthenticationDs from "./data-sources/AuthenticationDs";
    import { Spinner } from "flowbite-svelte";
    import type { UserData } from "./model/UserData";
    import FinishSignUp from "./pages/FinishSignUp.svelte";
    import { get } from "svelte/store";
    import League from "./pages/League.svelte";

    let loading: Boolean = true;
    let pathname: String;
    let user: User | null = null;
    let userData: UserData | null = null;
    let validating: Boolean = true;

    let page: any;
    $: {
        if (pathname.startsWith("/landing")) {
            page = Landing;
        } else if (pathname.startsWith("/dashboard")) {
            page = Dashboard;
        } else if (pathname.startsWith("/finish-sign-up")) {
            page = FinishSignUp;
        } else if (pathname.startsWith("/league")) {
            page = League;
        }else {
            page = Page404;
        }
    }

    function route() {
        if((pathname.startsWith("/landing") || pathname.startsWith("/dashboard")) && user != null && (userData == null || userData["first-name"] == null) && !get(AuthenticationState.authenticating)) {
            console.log("Replaced")
            NavigationState.replace("/finish-sign-up");
        } else if(pathname.startsWith("/finish-sign-up") && user == null) {
            NavigationState.replace("/landing");
        } else if(pathname.startsWith("/dashboard") && !AuthenticationState.isLoggedIn) {
            NavigationState.replace("/landing");
        } else if((pathname.startsWith("/finish-sign-up") || pathname.startsWith("/landing")) && AuthenticationState.isLoggedIn) {
            NavigationState.replace("/dashboard");
        } else if(!validating && !AuthenticationState.isLoggedIn && pathname.startsWith("/league")) {
            NavigationState.replace("/landing");   
        }
    }

    NavigationState.path.subscribe((value) => {
        pathname = value.pathname;
        console.log(pathname)
        route();
    });
    AuthenticationState.user.subscribe((value) => {
        user = value;
        route();
    });
    AuthenticationState.userData.subscribe((value) => {
        userData = value;
        route();
    });
    AuthenticationState.authenticating.subscribe((value) => {
        console.log("value: "+ value)
        route();
    });


    onMount(() => {
        AuthenticationState.validate().then(() => {
            validating = false;
            route();
        });

        if (pathname == "/") {
            NavigationState.replace("/landing");
        }
        loading = false;
    });
</script>

<main class="dark w-screen min-h-screen flex items-center justify-center bg-gradient-to-r bg-white dark:bg-gray-900 py-16">
    {#if !loading && !validating}
        <svelte:component this={page} />
    {:else}
        <Spinner />
    {/if}
</main>
