import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  aantalPolls: number;
  aantalGebruikers: number;

  constructor(private _homeService: HomeService, private router: Router) { }

  ngOnInit() {
    this._homeService.getCountPolls().subscribe(result => {
      this.aantalPolls = result;
    });
    
    this._homeService.getCountGebruikers().subscribe(result => {
      this.aantalGebruikers = result;
    });
  }

  toLogin()
  {
    this.router.navigateByUrl('/login');
  }

  toRegistreer()
  {
    this.router.navigateByUrl('/registratie');
  }

}
