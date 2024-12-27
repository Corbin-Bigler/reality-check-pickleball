import * as admin from "firebase-admin";
import { onCall } from "firebase-functions/v2/https";
import { Status } from "./Status";
import { FieldValue } from "firebase-admin/firestore";

const db = admin.firestore();
const leagues = db.collection("leagues");

export const removeLeaguePlayer = onCall(async (request) => {
    const uid = request.auth?.uid;
    if (!uid) return { status: Status.unauthorized };

    let data = request.data;
    console.log(data);

    const playerRefPath: string = data.player;
    const playerRef = db.doc(playerRefPath)
    const leagueId: string = data.league;
    if (!playerRef || !leagueId) return { status: Status.invalidRequest };
    const leagueRef = leagues.doc(leagueId);

    try {
        const collectionPath = playerRef.path.split("/")[0];
        const batch = db.batch();
        if (collectionPath === "users") {
            batch.update(leagueRef, {
                players: FieldValue.arrayRemove(playerRef)
            });
            batch.update(playerRef, {
                leagues: FieldValue.arrayRemove(leagueRef)
            });
        } else if (collectionPath === "invites") {
            batch.update(leagueRef, {
                players: FieldValue.arrayRemove(playerRef)
            });
            batch.delete(playerRef)
        }
        await batch.commit();

        return { status: Status.success };
    } catch (error) {
        console.error(error);
        return { status: Status.internalError };
    }
});
