import { connectFirestoreEmulator, getFirestore, collection, addDoc, getDoc, getDocs, doc, setDoc, updateDoc, where, FieldPath, query, documentId, DocumentReference, deleteDoc} from "firebase/firestore";
import firebaseApp from "../utility/FirebaseApp";
import type { UserData } from "../model/UserData";
import type { League } from "../model/League";
import type { Invite } from "../model/Invite";
import type { Game } from "../model/Game";

export default class FirestoreDs {
    private static _db: ReturnType<typeof getFirestore> | null = null;
    private static get db(): ReturnType<typeof getFirestore> {
        if (!this._db) {
            firebaseApp()
            this._db = getFirestore();

            if(import.meta.env.VITE_DEV == "true") {
                connectFirestoreEmulator(this._db, '127.0.0.1', 8084);
            }
        }
        return this._db;
    }

    private static leagues  = "leagues"
    private static users = "users"
    private static invites = "invites"

    static async updateUserData(uid: string, diff: object): Promise<void> {
        const docRef = doc(this.db, this.users, uid);
        await updateDoc(docRef, diff);
    }    
    static async addUserData(uid: string, userData: UserData) {
        const docRef = doc(this.db, this.users, uid)
        await setDoc(docRef, userData);
    }
    static async getUserData(uid: string): Promise<UserData | null> {
        const docSnap = await getDoc(doc(this.db, this.users, uid));
        if (docSnap.exists()) {
            const data = docSnap.data();
            return data as UserData;
        } 
        return null;
    }
    static async getLeague(id: string): Promise<League | null> {
        const docSnap = await getDoc(doc(this.db, this.leagues, id));
        if (docSnap.exists()) {
            const data = docSnap.data();
            return data as League;
        } 
        return null;
    }    
    static async getLeagueGames(id: string): Promise<Game[]> {
        const leagueDocRef = doc(this.db, this.leagues, id); // Reference to the league document
        const gamesCollectionRef = collection(leagueDocRef, "games"); // Reference to the games subcollection
    
        const queryRef = query(gamesCollectionRef);
        const querySnapshot = await getDocs(queryRef);
        
        return querySnapshot.docs.map(doc => ({ reference: doc.ref, ...doc.data() } as Game));
    }
    static async updateGame(ref: DocumentReference, diff: object): Promise<void> {
        await updateDoc(ref, diff);
    }    
    static async deleteGame(ref: DocumentReference): Promise<void> {
        await deleteDoc(ref)
    }    

    static async getLeagues(ids: string[]): Promise<BulkLeagues> {
        const queryRef = query(collection(this.db, this.leagues), where(documentId(), "in", ids));
        const querySnapshot = await getDocs(queryRef);

        const leagues: BulkLeagues = {};
        querySnapshot.forEach((doc) => {
            leagues[doc.id] = doc.data() as League;
        });

        return leagues;
    }
    static async getUserDatas(ids: string[]): Promise<BulkUserData> {
        const queryRef = query(collection(this.db, this.users), where(documentId(), "in", ids));
        const querySnapshot = await getDocs(queryRef);

        const leagues: BulkUserData = {};
        querySnapshot.forEach((doc) => {
            leagues[doc.id] = doc.data() as UserData;
        });

        return leagues;
    }
    static async getInvites(ids: string[]): Promise<BulkInvites> {
        const queryRef = query(collection(this.db, this.invites), where(documentId(), "in", ids));
        const querySnapshot = await getDocs(queryRef);

        const leagues: BulkInvites = {};
        querySnapshot.forEach((doc) => {
            leagues[doc.id] = doc.data() as Invite;
        });

        return leagues;
    }
}

export type BulkLeagues = { [id: string]: League }
export type BulkUserData = { [id: string]: UserData }
export type BulkInvites = { [id: string]: Invite }