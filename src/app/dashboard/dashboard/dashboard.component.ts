import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { PollGebruiker } from 'src/app/models/poll-gebruiker.model';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Router } from '@angular/router';
import { Antwoord } from 'src/app/models/antwoord.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pollVerzoeken: PollGebruiker[];
  polls: PollGebruiker[];
  eigenPolls: PollGebruiker[];

  private modalIsOpen : boolean = false;
  private openModal(open : boolean) : void {
    this.ngOnInit();
    this.modalIsOpen = open;
  }

  constructor(private _dashboardService: DashboardService, private router: Router) { }

  ngOnInit() {
    this._dashboardService.getPolls().subscribe( result => {
      this.polls = result;
    });

    this._dashboardService.getEigenPolls().subscribe( result => {
      this.eigenPolls = result;
    })

    this._dashboardService.getPollVerzoeken().subscribe( result => {
      this.pollVerzoeken = result;
    })
  }

  accepteerVerzoek(pollGebruiker: PollGebruiker)
  {
    this._dashboardService.accepteerVerzoek(pollGebruiker).subscribe(result => {
      this.ngOnInit();
    })
  }

  verwijderVerzoek(id: number)
  {
    this._dashboardService.verwijderVerzoek(id).subscribe(result => {
      this.ngOnInit();
    });
  }

  toPollToevoegen()
  {
    this.router.navigateByUrl('/pollToevoegen');
  }

  nodigUit(pollID: number)
  {
    localStorage.setItem("poll", ""+pollID);
        
    this.router.navigateByUrl("/vriendenToevoegen");
  }

  naarPoll(pollID: number)
  {
    localStorage.setItem("poll", ""+pollID);
        
    this.router.navigateByUrl("/polls");
  }

  verwijderPoll(pollID: number)
  {
    this._dashboardService.verwijderPoll(pollID).subscribe(result => {
      this.openModal(true)
    });
  }
}
