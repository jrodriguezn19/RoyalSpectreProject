import { Component, OnInit } from '@angular/core';
import { post } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private http: HttpClient) { 
    
  }

  ngOnInit() {
    
  }
  login(email, password){
    this.http.post('localhost:8000/login', {userEmail: email, userPassword: password});
  }

}
