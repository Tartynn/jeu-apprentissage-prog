import { Firestore, collection, doc, getDoc, getDocs, getFirestore, query, where } from "@angular/fire/firestore";


export class LevelDAL {
    constructor(){}
    async getLevelById(levelID:string){
        const db = getFirestore();
        const levelRef = collection(db, "niveaux");
        const levelQuery = query(levelRef, where("niveauID", "==", levelID));
        const snapshot = await getDocs(levelQuery);
        let level;
        if (!snapshot.empty) {
            level = snapshot.docs[0].data();
        }
        console.log(level);
        return level;
    }
}