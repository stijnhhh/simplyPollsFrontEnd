import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Poll } from 'src/app/models/poll.model';
import { Antwoord } from 'src/app/models/antwoord.model';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toevoegen-poll',
  templateUrl: './toevoegen-poll.component.html',
  styleUrls: ['./toevoegen-poll.component.scss']
})
export class ToevoegenPollComponent implements OnInit {

  pollForm: FormGroup;
  poll: Poll;
  antwoorden: Antwoord[];

  constructor(private _dashboardService: DashboardService, private router: Router) { }

  ngOnInit() {
    this.pollForm = new FormGroup({
      naam: new FormControl('', {validators: [Validators.required, Validators.minLength(3)]}),
      antwoord: new FormControl('')
    });

    this.antwoorden = new Array<Antwoord>();
  }

  pollToevoegen()
  {
    this.poll = new Poll(0, this.pollForm.value.naam, this.antwoorden, null);

    console.log(this.poll.antwoorden);

    this._dashboardService.voegPollToe(this.poll).subscribe(result =>
      {
        localStorage.setItem("poll", result.pollID.toString());
        
        this.router.navigateByUrl("/vriendenToevoegen");
      });
  }

  voegAntwoordToe()
  {
    this.antwoorden.push(new Antwoord(0, this.pollForm.value.antwoord, null, null));
  
    this.pollForm.controls['antwoord'].setValue("");
  }

  verwijderAntwoord(antwoord: Antwoord)
  {
    this.antwoorden.splice(this.antwoorden.indexOf(antwoord), 1);
  }
}
