
// Callback used to handle login redirects. The handleAuthCallback() auth serice method must be called when
// when Auth0 redirects back to the application.
// This component is based on code from Auth0 quickstart guide; https://auth0.com/docs/quickstart/spa/angular2

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.handleAuthCallback();
  }

}
