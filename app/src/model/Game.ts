import type { DocumentReference } from "firebase/firestore"

export type Game = {
    "reference": DocumentReference,
    "scheduled": number,
    "completed": number | null,
    "a": DocumentReference[],
    "b": DocumentReference[],
    "round": number,
    "court": number,
    "matches": Match[]
}

export type Match = {
    "a": number,
    "b": number
}