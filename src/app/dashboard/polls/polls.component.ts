import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';
import { PollGebruiker } from 'src/app/models/poll-gebruiker.model';
import { Antwoord } from 'src/app/models/antwoord.model';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {

  constructor(private _dashboardService: DashboardService, private router: Router) { }

  pollGebruiker: PollGebruiker;
  pollID: number;
  stemmenIDLijst: number[];

  ngOnInit() {
    this.stemmenIDLijst = new Array<number>();

    this.pollID = +localStorage.getItem("poll");
    this._dashboardService.getPoll(this.pollID).subscribe(result => {
      console.log(result);
      this.pollGebruiker = result;
    });

    this._dashboardService.getStemmen().subscribe(results => {
      for(let result of results)
      {
        this.stemmenIDLijst.push(result.antwoord.antwoordID);
      }
    });
  }

  veranderStem(antwoord: Antwoord)
  {
    this._dashboardService.voegStemToe(antwoord).subscribe( result => {
      this.ngOnInit();
    });
  }

  terugNaarDashboard()
  {
    localStorage.removeItem("poll");

    this.router.navigateByUrl("/dashboard");
  }

  bekijkResultaat()
  {
    this.router.navigateByUrl("/resultaten");
  }

}
