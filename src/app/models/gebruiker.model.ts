import { Stem } from './stem.model';
import { Observable } from 'rxjs';

export class Gebruiker {
    gebruikerID: number;
    email: string;
    wachtwoord: string;
    gebruikersnaam: string;
    token: string;
    stemmen: Observable<Stem>;

    constructor(gebruikerID: number, email: string, wachtwoord: string, gebruikersnaam: string, token: string, stemmen: Observable<Stem>)
    {
        this.gebruikerID = gebruikerID;
        this.gebruikersnaam = gebruikersnaam;
        this.email = email;
        this.wachtwoord = wachtwoord;
        this.token = token;
        this.stemmen = stemmen;
    }
}
