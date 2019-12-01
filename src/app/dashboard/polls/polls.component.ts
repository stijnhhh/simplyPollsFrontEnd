import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';
import { PollGebruiker } from 'src/app/models/poll-gebruiker.model';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {

  constructor(private _dashboardService: DashboardService, private router: Router) { }

  pollGebruikers: PollGebruiker[];

  ngOnInit() {
    this._dashboardService.getPolls().subscribe(result => {
      this.pollGebruikers = result;
    });
  }

}
