import { Component, OnInit } from '@angular/core';
import { AanmeldingService } from '../aanmelding.service';
import { Observable, from } from 'rxjs';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GebruikerLogin } from 'src/app/models/gebruiker-login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  gebruikerLogin: GebruikerLogin = new GebruikerLogin("", "");
  gebruiker: Gebruiker[];
  message: String;

  constructor(private _aanmeldingService: AanmeldingService, private router: Router)
  {
    
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      wachtwoord: new FormControl('', { validators: [Validators.required]})
    });
  }

  onLogin() {
    const {email, wachtwoord} = this.loginForm.value;
    this.gebruikerLogin.email = email;
    this.gebruikerLogin.wachtwoord = wachtwoord;

    this._aanmeldingService.authenticate(this.gebruikerLogin).subscribe(result => {
      localStorage.setItem("token",result.token)
      localStorage.setItem("gebruikerID", result.gebruikerID.toString())
      localStorage.setItem("naam", result.gebruikersnaam.toString())
      this._aanmeldingService.isIngelogd.next(result.token ? true : false);
      
      this.message = null;
      this.router.navigateByUrl('/');

    }, error => {this.message = "U heeft een verkeerde gebruikersnaam of wachtwoord ingegeven"})

    this._aanmeldingService.getGebruiker(+(localStorage.getItem("gebruikerID"))).subscribe(result =>{
      this.gebruiker = result;
    });
  }

}
