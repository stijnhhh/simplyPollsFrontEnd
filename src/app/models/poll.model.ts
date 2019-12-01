import { Observable } from 'rxjs';
import { Antwoord } from './antwoord.model';
import { PollGebruiker } from './poll-gebruiker.model';

export class Poll {
    pollID: number;
    naam: string;
    antwoorden: Antwoord[];
    pollGebruikers: PollGebruiker[]

    constructor(pollID: number, naam: string, antwoorden: Antwoord[], pollGebruikers: PollGebruiker[])
    {
        this.pollID = pollID;
        this.naam = naam;
        this.antwoorden = antwoorden;
        this.pollGebruikers = pollGebruikers;
    }
}
