import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PollGebruiker } from '../models/poll-gebruiker.model';
import { Poll } from '../models/poll.model';
import { Antwoord } from '../models/antwoord.model';
import { Stem } from '../models/stem.model';
import { Vriend } from '../models/vriend.model';
import { Gebruiker } from '../models/gebruiker.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getEigenPolls()
  {
    return this.http.get<PollGebruiker[]>("https://localhost:44363/api/pollGebruiker/geteigenpolls", {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  getPolls()
  {
    return this.http.get<PollGebruiker[]>("https://localhost:44363/api/pollGebruiker/getpolls", {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  getPollVerzoeken()
  {
    return this.http.get<PollGebruiker[]>("https://localhost:44363/api/pollGebruiker/getpollverzoeken", {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  accepteerVerzoek(pollGebruiker: PollGebruiker)
  {
    return this.http.put<PollGebruiker[]>("https://localhost:44363/api/pollGebruiker/accepteerverzoek", pollGebruiker, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }
  
  verwijderVerzoek(id: number)
  {
    return this.http.delete<PollGebruiker[]>("https://localhost:44363/api/pollGebruiker/verwijderverzoek?id=" + id, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }
  
  verwijderPoll(id: number)
  {
    return this.http.delete<Poll>("https://localhost:44363/api/pollGebruiker/verwijderpoll?id=" + id, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  voegPollToe(poll: Poll)
  {
    return this.http.post<Poll>("https://localhost:44363/api/poll", poll, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  voegStemToe(antwoord: Antwoord)
  {
    return this.http.post<Stem>("https://localhost:44363/api/stem/voegstemtoe", antwoord, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  zoekVrienden(pollID: number)
  {
    return this.http.get<Gebruiker[]>("https://localhost:44363/api/vriend/getVriendVoorPoll?pollID=" + pollID, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  nodigVriendUit(pollID: number, gebruiker: Gebruiker)
  {
    return this.http.post<PollGebruiker>("https://localhost:44363/api/PollGebruiker/nodigvrienduit?pollID=" + pollID, gebruiker, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  getPoll(pollID: number)
  {
    return this.http.get<PollGebruiker>("https://localhost:44363/api/PollGebruiker/zoekPoll?pollID=" + pollID, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }
}
