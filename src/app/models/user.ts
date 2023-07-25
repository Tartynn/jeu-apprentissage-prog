export interface User {
    email:string;
    nom: string;
    prenom: string;
    niveauActuel: number;
    niveaux: string[];
    niveauxReussis: number[];
    essais: number[];
    admin: boolean;
}
