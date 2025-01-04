import { getAuth, connectAuthEmulator, createUserWithEmailAndPassword, signInWithEmailAndPassword, type User, signOut } from "firebase/auth";
import firebaseApp from "../utility/FirebaseApp";

export default class AuthenticationDs {
    private static _auth: ReturnType<typeof getAuth> | null = null;
    private static get auth(): ReturnType<typeof getAuth> {
        if (!this._auth) {
            firebaseApp()
            this._auth = getAuth();
            
            if(import.meta.env.VITE_DEV == "true") {
                connectAuthEmulator(this._auth, "http://127.0.0.1:9099");
            }
            
        }
        return this._auth;
    }
    static get currentUser(): User | null { return this.auth.currentUser }
    static get authStateReady(): Promise<void> { return this.auth.authStateReady() }

    static async signIn(email: string, password: string): Promise<User> {
        let userCredential = await signInWithEmailAndPassword(this.auth, email, password)
        return userCredential.user
    }
    static signOut() {
        signOut(this.auth)
    }

    static onUserChanged(observer: (user: User | null) => void) {
        AuthenticationDs.auth.onAuthStateChanged(observer)
    }
    
    static async createAccount(email: string, password: string): Promise<User> {
        let userCredential = await createUserWithEmailAndPassword(this.auth, email, password)
        return userCredential.user
    }

}