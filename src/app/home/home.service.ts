import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getCountPolls() {
    return this.http.get<number>("https://localhost:44363/api/poll/getcount");
  }

  getCountGebruikers() {
    return this.http.get<number>("https://localhost:44363/api/gebruiker/getcount");
  }
}
