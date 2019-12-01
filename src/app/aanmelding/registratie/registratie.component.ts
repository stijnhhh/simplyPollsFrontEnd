import { Component, OnInit } from '@angular/core';
import { AanmeldingService } from '../aanmelding.service';
import { Observable } from 'rxjs';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registratie',
  templateUrl: './registratie.component.html',
  styleUrls: ['./registratie.component.scss']
})
export class RegistratieComponent implements OnInit {

  registratieForm: FormGroup;
  message: string;
  gebruiker: Gebruiker;

  gebruikers: Observable<Gebruiker[]>;

  constructor(private _aanmeldingService: AanmeldingService, private router: Router)
  {
    
  }

  ngOnInit() {
    this.registratieForm = new FormGroup({
      gebruikersnaam: new FormControl('', {validators: [Validators.required, Validators.minLength(4)]}),
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      wachtwoord: new FormControl('', { validators: [Validators.required, Validators.minLength(5)]}),
      controlWachtwoord: new FormControl('', { validators: [Validators.required]})
    });

    this.gebruikers = this._aanmeldingService.getGebruikers();
  }

  onRegistratie()
  {
    const {gebruikersnaam, email, wachtwoord, controlWachtwoord} = this.registratieForm.value;

    if(wachtwoord == controlWachtwoord)
    {
      this._aanmeldingService.maakGebruiker(new Gebruiker(0, email, wachtwoord, gebruikersnaam, null, null)).subscribe(result => {
        console.log(result);
        if(result == null)
        {
          this.message = "*Het opgegeven email adres bestaat al.*";
        } else {
          this.router.navigateByUrl('/login');
        }
      });
    } else {
      this.message = "*De wachtwoorden komen niet overeen.*";
    }
  }

}
