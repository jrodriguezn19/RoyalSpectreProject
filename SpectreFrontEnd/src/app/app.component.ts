import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spectre';
  ngOnInit(){
    AOS.init({
      offset:200,
      duration: 1000
    });
  }
}
