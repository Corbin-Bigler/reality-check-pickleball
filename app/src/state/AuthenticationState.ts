import { AuthErrorCodes, type User } from "firebase/auth"
import AuthenticationDs from "../data-sources/AuthenticationDs"
import { derived, writable, get } from 'svelte/store';
import { appError, AppError } from "../model/AppError";
import { FirebaseError } from "firebase/app";
import type { UserData } from "../model/UserData";
import FirestoreDs from "../data-sources/FirestoreDs";
import FunctionsDs from "../data-sources/FunctionsDs";
import { Status } from "../model/Status";

class AuthenticationState {
    authenticating = writable<Boolean>(false)
    user = writable<User | null>(null)
    userData = writable<UserData | null>(null)
    get isLoggedIn(): Boolean { 
        let userData = get(this.userData)
        return get(this.user) != null && userData!= null && userData["first-name"] != null
    }
    get uid(): string | null {
        return get(this.user)?.uid ?? null
    }
      
    async validate() {
        await AuthenticationDs.authStateReady 
        try {
            if(AuthenticationDs.currentUser != null) await this.finishSignIn(AuthenticationDs.currentUser)
        } catch(error) {
            console.error(error)
            this.signOut()
        }
    }

    constructor() {
        AuthenticationDs.onUserChanged((user) => {
            this.user.set(user)
        })
    }

    private async finishSignIn(user: User) {
        let userData = await FirestoreDs.getUserData(user.uid)
        if(userData == null) {
            let response: any = await FunctionsDs.createUserData()
            if(response.status != Status.success) { throw appError(response.status) }
        }
        this.userData.set(userData)
    }

    async getUserData() {
        let uid = get(this.user)?.uid
        if(uid == null) return

        let newUserData = await FirestoreDs.getUserData(uid)
        this.userData.set(newUserData)
    }

    async updateUserData(data: object) {
        let uid = get(this.user)?.uid
        if(uid == null) return

        await FirestoreDs.updateUserData(uid, data)
        await this.getUserData()
    }

    async signIn(email: string, password: string) {
        this.authenticating.set(true)
        try {
            let user = await AuthenticationDs.signIn(email, password)
            await this.finishSignIn(user)
        } catch(error) {
            this.authenticating.set(false)
            if(!(error instanceof FirebaseError)) throw AppError.Unknown
            if(error.code == AuthErrorCodes.INVALID_PASSWORD || error.code == AuthErrorCodes.USER_DELETED) {
                throw AppError.InvalidCredentials
            }
            throw AppError.Unknown
        }
        this.authenticating.set(false)
    }

    async createAccount(email: string, password: string) {
        try {
            let user = await AuthenticationDs.createAccount(email, password)
            await this.finishSignIn(user)
        } catch(error) {
            if(!(error instanceof FirebaseError)) throw AppError.Unknown
            if(error.code == AuthErrorCodes.EMAIL_EXISTS) {
                throw AppError.UserAlreadyExists
            }
        }
    }

    signOut() {
        this.user.set(null)
        this.userData.set(null)
        AuthenticationDs.signOut()
    }
}
export default new AuthenticationState()