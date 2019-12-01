import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';
import { PollGebruiker } from 'src/app/models/poll-gebruiker.model';

@Component({
  selector: 'app-resultaten',
  templateUrl: './resultaten.component.html',
  styleUrls: ['./resultaten.component.scss']
})
export class ResultatenComponent implements OnInit {

  constructor(private _dashboardService: DashboardService, private router: Router) { }

  pollGebruiker: PollGebruiker;

  ngOnInit() {
    this.pollGebruiker = new PollGebruiker(null, null, null, null, null);

    this._dashboardService.getPoll(+localStorage.getItem("poll")).subscribe(result => {
      this.pollGebruiker = result;
    });
  }

  terugNaarDashboard()
  {
    localStorage.removeItem("poll");

    this.router.navigateByUrl("/dashboard");
  }

}
