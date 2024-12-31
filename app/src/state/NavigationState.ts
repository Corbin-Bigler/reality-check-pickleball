import { writable } from "svelte/store";

const initial = new URL(window.location.href)
class NavigationState {
    path = writable<URL>(initial);
    params = writable<URLSearchParams>(initial.searchParams);

    replace(uri: string) {
        const newUrl = new URL(uri, window.location.origin)
        window.history.replaceState({}, "", newUrl.href)       
        this.path.set(newUrl)
        this.params.set(newUrl.searchParams)
    }

    navigate(to: string) {
        const newUrl = new URL(to, window.location.origin)
        this.path.set(newUrl)
        this.params.set(newUrl.searchParams)
        window.history.pushState({}, "", newUrl.href);        
    }

    navigateBack() {
        // const newUrl = new URL(to, window.location.origin)
        // this.path.set(newUrl)
        // this.params.set(newUrl.searchParams)
        window.history.back()//pushState({}, "", newUrl.href);        
    }

    setParam(key: string, value: string) {
        const currentUrl = new URL(window.location.href)
        currentUrl.searchParams.set(key, value);

        this.params.set(currentUrl.searchParams);
        this.path.set(currentUrl);

        window.history.pushState({}, "", currentUrl.href);        
    }
    removeParam(key: string) {
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.delete(key)
    
        this.params.set(currentUrl.searchParams)
        this.path.set(currentUrl)
    
        window.history.pushState({}, "", currentUrl.href)
    }
}

const shared = new NavigationState()
window.addEventListener('popstate', (event) => {
    const url = new URL(window.location.href)
    shared.path.set(url)
    shared.params.set(url.searchParams)
});

export default shared;
