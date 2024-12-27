import type { DocumentReference } from "firebase/firestore"

export type UserData = {
    "created-at": number,
    "first-name": string,
    "last-name": string,
    "phone": string,
    "role": string,
    "leagues": DocumentReference[],
    "admin": Boolean
}