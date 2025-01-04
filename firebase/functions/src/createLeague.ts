import * as admin from 'firebase-admin';
import { FieldValue } from "firebase-admin/firestore"
import { onCall } from 'firebase-functions/v2/https'
import { Status } from './Status';

const db = admin.firestore();
const users = db.collection("users")
const leagues = db.collection("leagues")

export const createLeague = onCall(async (request) => {
    const uid = request.auth?.uid;
    if(!uid) return {status: Status.unauthorized}

    let data = request.data
    console.log(data)
    const name: string = data.name
    const description: string = data.description
    const startDate: number = data["start-date"]
    const endDate: number = data["end-date"]
    if(!name || !description || !startDate || !endDate) return {status: Status.invalidRequest}

    try {
        const userRef = users.doc(uid)
        const userSnap = await userRef.get()
        const userData: any = userSnap.data()
        if(!userData.admin) return {status: Status.unauthorized}

        const leagueRef = await leagues.add({
            "name": name,
            "description": description,
            "start-date": new Date(startDate),
            "end-date": new Date(endDate),
            "entry-fee": 0,
            "organizers": [userRef],
            "players": [],
            "round": 0
        })

        await userRef.update({
            ["leagues"]: FieldValue.arrayUnion(leagueRef)
        })      

        return {status: Status.success}
    } catch (error) {
        console.error(error)
        return {status: Status.internalError}
    }
})