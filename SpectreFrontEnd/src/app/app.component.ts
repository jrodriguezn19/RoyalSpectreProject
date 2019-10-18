import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) {}
  

  // Auth local setup on initialisation
  // https://auth0.com/docs/quickstart/spa/angular2
  ngOnInit() {
    this.auth.localAuthSetup();
  }
}