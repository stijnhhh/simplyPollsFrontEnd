import { Gebruiker } from './gebruiker.model';
import { Antwoord } from './antwoord.model';

export class Stem {
    stemID: number;
    antwoord: Antwoord;
    gebruiker: Gebruiker;
    check: boolean;

    constructor(stemID: number, antwoord: Antwoord, gebruiker: Gebruiker, check: boolean)
    {
        this.stemID = stemID;
        this.antwoord = antwoord;
        this.gebruiker = gebruiker;
        this.check = check;
    }
}
