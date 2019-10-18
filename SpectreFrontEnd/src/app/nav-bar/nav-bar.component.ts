import { Component, OnInit } from '@angular/core';
import  axios  from 'axios';
import createAuth0Client from '@auth0/auth0-spa-js';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
 
   // Navbar using auth0 serivce. Based on code from: 
  //  https://auth0.com/docs/quickstart/spa/angular2
  constructor(public auth: AuthService) { 
    
  }

  ngOnInit() {
   
  }
  enteredEmail = '';
  enteredPassword = '';
  confirmPassword = '';

  login(){
    axios.post('http://localhost:8000/login' , {userEmail: this.enteredEmail, userPassword: this.enteredPassword})
    .then(function (response) {
      console.log(response.data['message']);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  register(){
    axios.post('http://localhost:8000/register' , {userEmail: this.enteredEmail, userPassword: this.enteredPassword})
    .then(function (response) {
      console.log(response.data['message']);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

}
