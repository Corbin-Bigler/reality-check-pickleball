import * as admin from 'firebase-admin';
import { onCall } from 'firebase-functions/v2/https'
import { Status } from './Status';
// import { DocumentReference } from 'firebase-admin/firestore';
// import { FieldValue } from 'firebase-admin/firestore';

const db = admin.firestore();
const users = db.collection("users")
const leagues = db.collection("leagues")

function winnerOf(game: any): "a" | "b" {
    let aWins = 0;
    let bWins = 0;

    game.matches.forEach((match: any) => {
        if (match.a > match.b) {
            aWins++;
        } else if (match.b > match.a) {
            bWins++;
        }
    });

    if (aWins > bWins) {
        return "a";
    } else if (bWins > aWins) {
        return "b";
    } else {
        return "a";
    }
}

export const scheduleGames = onCall(async (request) => {
    const uid = request.auth?.uid;
    if(!uid) return {status: Status.unauthorized}

    let data = request.data

    const league: string = data.league
    const matches: number = data.matches
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
        const gameSize = 4
        if (leagueData.players.length < gameSize) return {status: Status.notEnoughPlayers}

        // let courts = Math.floor(leagueData.players.length / gameSize)
        // let playerCourtMap: {[playerId: string]: number} = {}
        // for (let i = 0; i < courts; i++) {
        //     const courtGames = games.filter(game => game.reference.id === `court-${i}`);
        //     courtGames.forEach(game => {
        //         game.a.forEach((player: DocumentReference) => (playerCourtMap[player.id] = i));
        //         game.b.forEach((player: DocumentReference) => (playerCourtMap[player.id] = i));
        //     });
        // }
        // console.log(courts)


        const round = (leagueData.round ?? 0) + 1

        const games = (await leagueRef.collection("games").get()).docs
            .map(e=>e.data())
            .filter(e=> e.round == round - 1)
            .sort((a, b) => a.court - b.court)
        
        let unmatchedPlayers: Set<any> = new Set(leagueData.players)
        let courts = Math.floor(leagueData.players.length / gameSize)
        let gamesToCreate: any[] = Array.from({ length: courts }, (_, index) => ({
            "scheduled": Date.now(),
            "completed": null,
            "a": [],
            "b": [],
            "court": index,
            "round": round,
            "matches": Array.from({ length: matches }, () => ({ a: 0, b: 0 }))
        }));

        for(let i = 0; i < courts; i += 1) {
            let lastGameOnCourt = games[i]

            var a: any[] = []
            var b: any[] = []
            if(lastGameOnCourt) {
                let winningTeam = winnerOf(lastGameOnCourt)
                let losingTeam = winningTeam == "a" ? "b" : "a"
                if(i == 0) {
                    gamesToCreate[i + 1].a.push(lastGameOnCourt[losingTeam][0])
                    gamesToCreate[i + 1].b.push(lastGameOnCourt[losingTeam][1])
                    a = i == 0 ? [lastGameOnCourt[winningTeam][0]] : []
                    b = i == 0 ? [lastGameOnCourt[winningTeam][1]] : []    
                } else if(i == courts - 1) {
                    gamesToCreate[i - 1].a.push(lastGameOnCourt[winningTeam][0])
                    gamesToCreate[i - 1].b.push(lastGameOnCourt[winningTeam][1])
                    a = i == 0 ? [lastGameOnCourt[losingTeam][0]] : []
                    b = i == 0 ? [lastGameOnCourt[losingTeam][1]] : []    
                } else {
                    gamesToCreate[i - 1].a.push(lastGameOnCourt[winningTeam][0])
                    gamesToCreate[i - 1].b.push(lastGameOnCourt[winningTeam][1])
                    gamesToCreate[i + 1].a.push(lastGameOnCourt[losingTeam][0])
                    gamesToCreate[i + 1].b.push(lastGameOnCourt[losingTeam][1])
                }

                let players = [...lastGameOnCourt.a, ...lastGameOnCourt.b]
                players.forEach(e=>unmatchedPlayers.delete(e))
            } else {
                const unmatchedPlayersArray = [...unmatchedPlayers]
                a = [unmatchedPlayersArray[0], unmatchedPlayersArray[1]]
                b = [unmatchedPlayersArray[2], unmatchedPlayersArray[3]]
            }

            let players = [...a, ...b]
            players.forEach(e=>unmatchedPlayers.delete(e))

            gamesToCreate[i].a.push(...a)
            gamesToCreate[i].b.push(...b)
        }

        for (let i = 0; i < gamesToCreate.length; i += gamesToCreate.length) {
            const batch = db.batch();
            const chunk = gamesToCreate.slice(i, i + gamesToCreate.length);
            chunk.forEach(gameToCreate => {
                batch.create(leagueRef.collection('games').doc(), gameToCreate)
            });
            await batch.commit();
        }

        await leagueRef.update({round: round})


        return {status: Status.success}
    } catch (error) {
        console.error(error)
        return {status: Status.internalError}
    }
})