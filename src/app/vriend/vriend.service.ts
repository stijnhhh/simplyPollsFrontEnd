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

  verzendMail(email: string)
  {
    MailAddress to = new MailAddress(email);
    MailAddress from = new MailAddress("noreply@northpoll.com");
    MailMessage message = new MailMessage(from, to);
    message.Subject = "Neem deel aan simply polls!";
    message.Body = "Hallo " + email + ", \n Je bent uitgenodigd voor een nieuwe poll op North Poll! \n\n" 
        + "Om deel te kunnen nemen aan deze poll volg je de volgende stappen: \n\n"
        + "1. Ga naar onze site \n2. Klik op 'Log In'\n Log je in met deze gegevens: \n  -Email: " + email + "\n  -Wachtwoord: temp123\n"
        + "4. (Optioneel) Verander je wachtwoord door op 'Wachtwoord veranderen' te klikken\n"
        + "5. Ga naar 'Vriendschapsverzoeken' en accepteer het vriendschapsverzoek van de vriend die je uitgenodigt heeft\n"
        + "6. Ga naar 'Mijn polls' en stem op de poll!\n\n"
        + "Veel pollplezier"
    SmtpClient client = new SmtpClient("smtp.mailtrap.io", 2525)
    {
        Credentials = new NetworkCredential("55c26ab6e5377c", "7de79150a5f454"),
        EnableSsl = true
    };
    // code in brackets above needed if authentication requir
    try
    {
        client.Send(message);
    }
    catch (SmtpException ex)
    {
        Console.WriteLine(ex.ToString());
    }
  }
}
