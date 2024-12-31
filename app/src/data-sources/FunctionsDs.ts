
import { connectFunctionsEmulator, getFunctions, httpsCallable } from "firebase/functions"
import firebaseApp from "../utility/FirebaseApp";
import type { DocumentReference } from "firebase/firestore";

export default class FunctionsDs {
    private static _functions: ReturnType<typeof getFunctions> | null = null;
    private static get functions(): ReturnType<typeof getFunctions> {
        if (!this._functions) {
            firebaseApp()
            this._functions = getFunctions();
            connectFunctionsEmulator(this._functions, "127.0.0.1", 5001);
        }
        return this._functions;
    }
    
    static async createUserData(): Promise<any> {
        const createUserData = httpsCallable(this.functions, 'createUserData');   
        return (await createUserData()).data
    }
    static async removeLeaguePlayer(playerRef: DocumentReference, league: string): Promise<any> {
        const removeLeaguePlayer = httpsCallable(this.functions, 'removeLeaguePlayer');   
        return (await removeLeaguePlayer({
            player: playerRef.path,
            league: league
        })).data
    }
    static async createLeague(name: string, description: string, startDate: Date, endDate: Date): Promise<any> {
        const createLeague = httpsCallable(this.functions, 'createLeague');   
        return (await createLeague({
            name: name,
            description: description,
            "start-date": startDate.getTime(),
            "end-date": endDate.getTime()
        })).data
    }
    static async addLeaguePlayer(email: string, leagueId: string): Promise<any> {
        const addLeaguePlayer = httpsCallable(this.functions, 'addLeaguePlayer');   
        return (await addLeaguePlayer({
            email: email,
            league: leagueId
        })).data
    }
    static async getBulkEmails(uids: string[]): Promise<any> {
        const getBulkEmails = httpsCallable(this.functions, 'getBulkEmails');   
        return (await getBulkEmails({uids})).data
    }
    static async scheduleGames(league: string, matches: number, duos: Boolean): Promise<any> {
        const scheduleGames = httpsCallable(this.functions, 'scheduleGames');   
        return (await scheduleGames({
            league,
            matches: matches,
            duos
        })).data
    }
}