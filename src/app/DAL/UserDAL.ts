import { inject } from "@angular/core";
import { Firestore, collection, doc, getDoc, getFirestore, setDoc, updateDoc } from "@angular/fire/firestore";

export class UserDAL {
    constructor(){}
    async addUser(uid:any, user:any){
        const db = getFirestore();
        const users = collection(db,"Utilisateurs");
        await setDoc(doc(users, uid), user);
    }
    
    async getUserById(uid:any){
        const db = getFirestore();
        const user = await getDoc(doc(db, "Utilisateurs",uid));
        return user.data();
    }

    async updateUserCode(uid:any, codeArray:any){
        const db = getFirestore();
        const user = doc(db, "Utilisateurs",uid);
        await updateDoc(user, {niveaux: codeArray});
    }
}
