import * as admin from "firebase-admin";
import { onCall } from "firebase-functions/v2/https";
import { Status } from "./Status";
import { DocumentReference, FieldValue } from "firebase-admin/firestore";

const auth = admin.auth();
const db = admin.firestore();
const users = db.collection("users");
const leagues = db.collection("leagues");
const invites = db.collection("invites");

export const addLeaguePlayer = onCall(async (request) => {
    const uid = request.auth?.uid;
    if (!uid) return { status: Status.unauthorized };

    let data = request.data;
    console.log(data);

    const email: string = data.email;
    const leagueId: string = data.league;
    if (!email || !leagueId) return { status: Status.invalidRequest };
    const leagueRef = leagues.doc(leagueId);

    try {
        const leagueSnap = await leagueRef.get();
        if (!leagueSnap.exists) return { status: Status.invalidRequest };
        const leagueData = leagueSnap.data();
        if (!leagueData) return { status: Status.invalidRequest };
        const organizers = leagueData.organizers as DocumentReference[];

        const userRef = users.doc(uid);
        const userSnap = await userRef.get();
        const userData: any = userSnap.data();
        if (!organizers.map((e) => e.id).includes(userRef.id) || !userData.admin)
            return { status: Status.unauthorized };

        let inviteeRef: DocumentReference | null = null
        try {
            const authRecord = await auth.getUserByEmail(email);
            inviteeRef = users.doc(authRecord.uid)
        } catch {
            inviteeRef = null;
        }

        if (inviteeRef != null && (await inviteeRef.get()).exists) {
            await leagueRef.update({
                ["players"]: FieldValue.arrayUnion(inviteeRef)
            })
            await inviteeRef.update({
                ["leagues"]: FieldValue.arrayUnion(leagueRef)
            })
        } else {
            const inviteRef = await invites.add({
                "email": email,
                "league": leagueRef
            })
            await leagueRef.update({
                ["players"]: FieldValue.arrayUnion(inviteRef)
            })
        }

        return { status: Status.success };
    } catch (error) {
        console.error(error);
        return { status: Status.internalError };
    }
});
