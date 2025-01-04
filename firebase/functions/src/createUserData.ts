import * as admin from 'firebase-admin';
import { onCall } from 'firebase-functions/v2/https'
import { Status } from './Status';
import { DocumentReference, FieldValue, Timestamp } from 'firebase-admin/firestore';

const auth = admin.auth();
const db = admin.firestore();
const users = db.collection("users")
const invites = db.collection("invites");

export const createUserData = onCall(async (request) => {
    const uid = request.auth?.uid;
    if(!uid) return {status: Status.unauthorized}
        
    try {
        const email = (await auth.getUser(uid)).email
        if(!email) return {status: Status.internalError}

        const invitesSnap = await invites.where("email", "==", email).get();
        const leagues = invitesSnap.docs.map(doc => doc.data().league);

        const batch = db.batch();
        let userRef = users.doc(uid)
        batch.create(userRef, {
            "created-at": Timestamp.now(),
            "first-name": null,
            "last-name": null,
            "phone": null,
            "leagues": leagues,
            "admin": false
        })

        for (const doc of invitesSnap.docs) {
            const data = doc.data();
            batch.update(data.league, {
                players: FieldValue.arrayUnion(userRef)
            });
            batch.update(data.league, {
                players: FieldValue.arrayRemove(doc.ref)
            });

            let games = data.league.collection("games")
            const gameDocs = await games.get();
            for (const subColDoc of gameDocs.docs) {
                const data = subColDoc.data();

                const updatedA = data["a"].map((item: DocumentReference) =>
                    item.path === doc.ref.path ? userRef : item
                );
                const updatedB = data["b"].map((item: DocumentReference) =>
                    item.path === doc.ref.path ? userRef : item
                );

                await subColDoc.ref.update({
                    "a": updatedA,
                    "b": updatedB
                });
            }
        }
        await batch.commit();

        const docsToDelete = invitesSnap.docs.map(doc=>doc.ref)
        for (let i = 0; i < docsToDelete.length; i += docsToDelete.length) {
            const batch = db.batch();
            const chunk = docsToDelete.slice(i, i + docsToDelete.length);
            chunk.forEach(docToDelete => {
                batch.delete(docToDelete);
            });
            await batch.commit();
        }

        return {status: Status.success}
    } catch (error) {
        return {status: Status.internalError}
    }
})