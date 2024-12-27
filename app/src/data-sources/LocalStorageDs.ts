
export default class LocalStorageDs {
    static set(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    static delete(key: string) {
        localStorage.removeItem(key);
    }

    static get(key: string): string | null {
        return localStorage.getItem(key);
    }
}