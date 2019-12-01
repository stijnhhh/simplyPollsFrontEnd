import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gebruiker } from '../models/gebruiker.model';
import { Vriend } from '../models/vriend.model';

@Injectable({
  providedIn: 'root'
})
export class VriendService {

  constructor(private http: HttpClient) { }

  getVriendschapsverzoeken(id: number) {
    return this.http.get<Vriend[]>("https://localhost:44363/api/vriend/getVriendVerzoek?id=" + id);
  }

  getVrienden() {
    return this.http.get<Gebruiker[]>("https://localhost:44363/api/vriend/getActieveVriend", {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  getAantalVrienden() {
    return this.http.get<number>("https://localhost:44363/api/vriend/getcount", {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  verwijderVriendVerzoek(id: number) {
    return this.http.delete<Vriend>("https://localhost:44363/api/vriend/" + id);
  }

  verwijderVriend(id: number) {
    return this.http.delete<Vriend>("https://localhost:44363/api/vriend/verwijderVriendById?id=" + id, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  voegVerzoekToe(id: number, vriend: Vriend) {
    return this.http.put<Vriend>("https://localhost:44363/api/vriend/" + id , vriend);
  }

  voegVriendToe(gebruiker: Gebruiker) {
    return this.http.post<Gebruiker>("https://localhost:44363/api/vriend", gebruiker, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  zoekGebruikerByEmail(email: string) {
    return this.http.get<Gebruiker>("https://localhost:44363/api/gebruiker/getGebruikerByEmail?email=" + email);
  }

  zoekGebruiker(id: number) {
    return this.http.get<Gebruiker>("https://localhost:44363/api/gebruiker/" + id);
  }

  zoekAantalVrienden() {
    return this.http.get<number>("https://localhost:44363/api/vriend/getcount");
  }

  mailNieuweGebruiker(email: string) {
    return this.http.post<Gebruiker>("https://localhost:44363/api/vriend", {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }
}
