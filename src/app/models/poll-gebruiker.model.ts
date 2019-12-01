import { Poll } from './poll.model';
import { Gebruiker } from './gebruiker.model';

export class PollGebruiker {
    pollGebruikerID: number;
    poll: Poll;
    gebruiker: Gebruiker;
    admin: Gebruiker;
    actief: boolean;

    constructor(pollGebruikerID: number, poll: Poll, gebruiker: Gebruiker, admin: Gebruiker, actief: boolean)
    {
        this.pollGebruikerID = pollGebruikerID;
        this.poll = poll;
        this.gebruiker = gebruiker;
        this.admin = admin;
        this.actief = actief;
    }
}
