import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Gebruiker } from '../models/gebruiker.model';
import { filter } from 'minimatch';
import { GebruikerLogin } from '../models/gebruiker-login.model';

@Injectable({
  providedIn: 'root'
})

export class AanmeldingService {

  isIngelogd = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
    this.isIngelogd.next(localStorage.getItem("token") ? true : false);
  }

  authenticate(gebruikerLogin: GebruikerLogin): Observable<Gebruiker> {
    return this.http.post<Gebruiker>("https://localhost:44363/api/gebruiker/authenticate", gebruikerLogin);
  }

  maakGebruiker(gebruiker: Gebruiker)
  {
    return this.http.post<Gebruiker>("https://localhost:44363/api/gebruiker/", gebruiker);
  }

  getGebruikers(): Observable<Gebruiker[]> {
    return this.http.get<Gebruiker[]>("https://localhost:44363/api/gebruiker", {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  getGebruiker(gebruikerID: number): Observable<Gebruiker[]> {
    return this.http.get<Gebruiker[]>("https://localhost:44363/api/gebruiker/" + gebruikerID);
  }
}
