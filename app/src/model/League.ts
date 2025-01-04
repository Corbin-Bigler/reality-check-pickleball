import type { DocumentReference } from "firebase/firestore"
import type { Game } from "./Game"

export type League = {
    "name": string,
    "description": string,
    "start-date": number,
    "end-date": number,
    "entry-fee": number,
    "organizers": DocumentReference[],
    "players": DocumentReference[],
}