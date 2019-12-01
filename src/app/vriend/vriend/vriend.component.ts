import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vriend } from 'src/app/models/vriend.model';
import { VriendService } from '../vriend.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { AanmeldingService } from 'src/app/aanmelding/aanmelding.service';

@Component({
  selector: 'app-vriend',
  templateUrl: './vriend.component.html',
  styleUrls: ['./vriend.component.scss']
})
export class VriendComponent implements OnInit {
  verzoeken: Observable<Vriend[]>;
  vrienden: Gebruiker[];
  vriendForm: FormGroup;
  gebruiker: Gebruiker = new Gebruiker(null, "", "", "", "", null);
  gebruiker1: Gebruiker;
  vriend: Vriend = new Vriend(null, null, null, null);
  bericht: string;
  bericht1: string;

  private modalIsOpen : boolean = false;
  private openModal(open : boolean) : void {
    this.modalIsOpen = open;
  }

  constructor(private _vriendService: VriendService, private _aanmeldingService: AanmeldingService) { }

  ngOnInit() {
    this.verzoeken = this._vriendService.getVriendschapsverzoeken(+localStorage.getItem("gebruikerID"));
    this._vriendService.getVrienden().subscribe(result => {
      
      this.vrienden = result;
    })

    this.vriendForm = new FormGroup({
      email: new FormControl('', { validators: [Validators.required, Validators.email]})
    });
  }

  verwijderVerzoek(vriend: Vriend)
  {
    this._vriendService.verwijderVriendVerzoek(vriend.vriendID).subscribe(result => {
      this.ngOnInit();
    });
  }

  verwijderVriend(id: number)
  {
    this._vriendService.verwijderVriend(id).subscribe(result => {
      this.ngOnInit();
    });
  }

  voegVerzoekToe(vriend: Vriend)
  {
    vriend.actief = true
    this._vriendService.voegVerzoekToe(vriend.vriendID, vriend).subscribe(result => {
      this.ngOnInit();
    });
  }

  voegVriendToe()
  {
    const{email} = this.vriendForm.value;

    this._vriendService.zoekGebruikerByEmail(email).subscribe( result => {
      if(result == null) {
        this.gebruiker1 = new Gebruiker(0, email, null, null, null, null);
        this._aanmeldingService.maakGebruiker(this.gebruiker1).subscribe(result1 => {
          this._vriendService.voegVriendToe(result1).subscribe( result2 => {
            if(result2 == null)
          {
            this.bericht1 = "Fout!"
            this.bericht = "U heeft al een verzoek gestuurd";
          } else {
            this.bericht1 = "Succes!"
            this.bericht = "Er is succesvol een vriendschapsverzoek gestuurd!";
          }
            this.openModal(true);
          });
        });
      } else {
        this._vriendService.voegVriendToe(result).subscribe(result1 => {
          console.log(result1);
          if(result1 == null)
          {
            this.bericht1 = "Fout!"
            this.bericht = "U heeft al een verzoek gestuurd";
          } else {
            this.bericht1 = "Succes!"
            this.bericht = "Er is succesvol een vriendschapsverzoek gestuurd!";
          }
          this.openModal(true);
        });
      }
    });
  }

}
