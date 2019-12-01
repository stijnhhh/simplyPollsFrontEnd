import { Gebruiker } from './gebruiker.model';

export class Vriend {
    vriendID: number;
    verzender: Gebruiker;
    ontvanger: Gebruiker;
    actief: boolean;

    constructor(vriendID: number, verzender: Gebruiker, ontvanger: Gebruiker, actief: boolean)
    {
        this.vriendID = vriendID;
        this.verzender = verzender;
        this.ontvanger = ontvanger;
        this.actief = actief;
    }
}
