import { Component, OnInit } from '@angular/core';
import { AanmeldingService } from './aanmelding/aanmelding.service';
import { Router } from '@angular/router';
import { VriendService } from './vriend/vriend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  gebruikerID: number;
  ingelogd: boolean;
  navbarOpen: boolean;

  constructor(private _aanmeldingsService: AanmeldingService, private router: Router, private _vriendService: VriendService)
  {
    this._aanmeldingsService.isIngelogd.subscribe(e => {
      this.ingelogd = e;
    })
  }

  ngOnInit() {

    if(localStorage.getItem("gebruikerID") != null) {
      this.gebruikerID = +localStorage.getItem("gebruikerID");
      
    } else {
      this.gebruikerID = null;
    }
  }

  onLogout() {
    localStorage.clear();

    this._aanmeldingsService.isIngelogd.next(false);

    this.router.navigateByUrl('/');
  }

  togglenav()
  {
    this.navbarOpen = !this.navbarOpen;
  }
}

