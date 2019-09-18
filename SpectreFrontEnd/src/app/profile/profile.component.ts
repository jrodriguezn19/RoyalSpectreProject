import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import  axios  from 'axios';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  enteredProjectName = '';
  enteredSummary = '';
  imageUpload = '';

  newProject(){
    axios.post('http://localhost:8000/newProject' , {projectName: this.enteredProjectName, projectSummary: this.enteredSummary, image: this.imageUpload})
    .then(function (response) {
      console.log(response.data['message']);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

}
