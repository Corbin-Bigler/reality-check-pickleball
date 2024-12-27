import type { DocumentReference } from "firebase/firestore"

export type Invite = {
    "email": string,
    "league": DocumentReference[]
}