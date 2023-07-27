import { Firestore, collection, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } from "@angular/fire/firestore";

export class CodeSentDAL {
    constructor(){}
    async sendCode(code:any){
        const db = getFirestore();
        const codeSent = collection(db,"NiveauEnvoye");
        await setDoc(doc(codeSent), code);
    }
    
    async getAllPendingCode(){
        const db = getFirestore();
        const codeSents = await getDocs(collection(db, "NiveauEnvoye"));
        return codeSents.docs.filter( (d) => {
            let docData: any = d.data();
            console.log(d.data());
            if (docData.enAttente)
                return d;
            return null;
        }).map(d => d.data);
    }

    async updateSendCode(uid:any, accepted: boolean){
        const db = getFirestore();
        const codeSent = doc(db, "NiveauEnvoye",uid);
        await updateDoc(codeSent, {accepte: accepted, enAttente: false});
    }
}