import type { DocumentReference } from "firebase/firestore"

export type Game = {
    "scheduled": number,
    "completed": number | null,
    "a": [DocumentReference],
    "b": [DocumentReference],
    "required-matches": number,
    "match-scores": {"a": number, "b": number}[],
}