import { Component, OnInit } from '@angular/core';
import  axios  from 'axios';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
   
  }
  enteredEmail = '';
  enteredPassword = '';
  login(){
    axios.post('http://localhost:8000/login' , {userEmail: this.enteredEmail, userPassword: this.enteredPassword})
    .then(function (response) {
      console.log(response.data['message']);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

}
