import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';
import { PollGebruiker } from 'src/app/models/poll-gebruiker.model';
import { Antwoord } from 'src/app/models/antwoord.model';

@Component({
  selector: 'app-eigen-polls',
  templateUrl: './eigen-polls.component.html',
  styleUrls: ['./eigen-polls.component.scss']
})
export class EigenPollsComponent implements OnInit {

  constructor(private _dashboardService: DashboardService, private router: Router) { }

  pollGebruiker: PollGebruiker;
  pollID: number;

  private modalIsOpen : boolean = false;
  private openModal(open : boolean) : void {
    this.ngOnInit();
    this.modalIsOpen = open;
  }

  ngOnInit() {
    this.pollID = +localStorage.getItem("poll");
    this._dashboardService.getPoll(this.pollID).subscribe(result => {
      console.log(result);
      this.pollGebruiker = result;
    });
  }

  veranderStem(antwoord: Antwoord)
  {
    this._dashboardService.voegStemToe(antwoord).subscribe();
  }

  nodigUit(pollID: number)
  {
    localStorage.setItem("poll", ""+pollID);
        
    this.router.navigateByUrl("/vriendenToevoegen");
  }

  verwijderPoll(pollID: number)
  {
    this._dashboardService.verwijderPoll(pollID).subscribe(result => {
      this.router.navigateByUrl("/dashboard");
    });
  }

}
