import * as admin from 'firebase-admin';
import { onCall } from 'firebase-functions/v2/https'
import { Status } from './Status';
import { FieldValue } from 'firebase-admin/firestore';

const db = admin.firestore();
const users = db.collection("users")
const leagues = db.collection("leagues")

export const scheduleGames = onCall(async (request) => {
    const uid = request.auth?.uid;
    if(!uid) return {status: Status.unauthorized}

    let data = request.data
    console.log(data)
    const league: string = data.league
    const matches: number = data.matches
    const duos: Boolean = data.duos
    if(!league || !matches) return {status: Status.invalidRequest}

    try {
        const userRef = users.doc(uid)
        const userSnap = await userRef.get()
        const userData: any = userSnap.data()
        if(!userData.admin) return {status: Status.unauthorized}

        const leagueRef = leagues.doc(league)
        const leagueSnap = await leagueRef.get()
        if(!leagueSnap.exists) return {status: Status.invalidRequest}
        const leagueData: any = leagueSnap.data()
        const gameSize = duos ? 4 : 2
        if (leagueData.players.length < gameSize) return {status: Status.notEnoughPlayers}
        
        console.log("Ready to schedule")

        let gamesToCreate: object[] = []
        let gamesCount = Math.floor(leagueData.players.length / gameSize)
        for(let i = 0; i < gamesCount; i += 1) {
            const start = i * gameSize
            var a = [leagueData.players[start]]
            var b = [leagueData.players[start+(duos ? 2 : 1)]]
            if(duos) a.push(leagueData.players[start+1])
            if(duos) b.push(leagueData.players[start+3])

            gamesToCreate.push({
                "scheduled": Date.now(),
                "completed": null,
                "a": a,
                "b": b,
                "required-matches": matches,
                "match-scores": []
            })
        }
        console.log(gamesToCreate)
        for (let i = 0; i < gamesToCreate.length; i += gamesToCreate.length) {
            const batch = db.batch();
            const chunk = gamesToCreate.slice(i, i + gamesToCreate.length);
            chunk.forEach(gameToCreate => {
                batch.update(leagueRef, {
                    games: FieldValue.arrayUnion(gameToCreate)
                });
            });
            await batch.commit();
        }

        return {status: Status.success}
    } catch (error) {
        console.error(error)
        return {status: Status.internalError}
    }
})