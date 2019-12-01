import { Poll } from './poll.model';
import { Stem } from './stem.model';
import { Observable } from 'rxjs';

export class Antwoord {
    antwoordID: number;
    antwoordPoll: string;
    poll: Poll;
    stemmen: Observable<Stem>;

    constructor(antwoordID: number, antwoordPoll: string, poll: Poll, stemmen: Observable<Stem>)
    {
        this.antwoordID = antwoordID;
        this.antwoordPoll = antwoordPoll;
        this.poll = poll;
        this.stemmen = stemmen;
    }
}
