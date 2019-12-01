import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Poll } from 'src/app/models/poll.model';
import { Vriend } from 'src/app/models/vriend.model';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { PollGebruiker } from 'src/app/models/poll-gebruiker.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vrienden-uitnodigen',
  templateUrl: './vrienden-uitnodigen.component.html',
  styleUrls: ['./vrienden-uitnodigen.component.scss']
})
export class VriendenUitnodigenComponent implements OnInit {

  constructor(private _dashboardService: DashboardService, private router: Router) { }

  pollID: number;
  gebruikers: Gebruiker[];
  pollGebruiker: PollGebruiker;

  ngOnInit() {
    this.pollID = +localStorage.getItem("poll");

    this._dashboardService.zoekVrienden(this.pollID).subscribe(result => {
      this.gebruikers = result;
      console.log(this.gebruikers);
    })
  }

  nodigVriendUit(gebruiker: Gebruiker)
  {
    this._dashboardService.nodigVriendUit(this.pollID, gebruiker).subscribe(result =>
      {
        this.ngOnInit();
      })
  }

  keerterug()
  {
    localStorage.removeItem("poll");
    this.router.navigateByUrl("/dashboard");
  }
}
