import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import axios from 'axios';

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
  id_user = '';
  target_fund = '';
  status = '';

  fileData: File = null;
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
  }
  selectedFile: File = null;

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }



  newProject() {
    axios.post('http://localhost:8000/newProject', { projectName: this.enteredProjectName, projectSummary: this.enteredSummary, image: this.imageUpload })
      .then(function (response) {
        console.log(response.data['message']);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  CreateProject() {
    
    let fileName = 'Hi Ivan.jpg';
    let url = 'https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/' + fileName + '?alt=media&token=57f0fd2a-30f4-469c-8371-d30e66a47975';
    
    const fd = new FormData();

    fd.append('Testing', this.selectedFile, fileName);
    axios.post('https://us-central1-royalspectreproject.cloudfunctions.net/uploadFile', fd).then(res => {
      console.log(res);
      alert("Post Complete");
    })
    
    axios.post('http://localhost:8000/createProject', { id_user: this.id_user, target_fund: this.target_fund, status: this.status, image_url: url })
      .then(function (response) {
        console.log(response.data['message']);
      })
      .catch(function (error) {
        console.log(error);
      });

    
  


  }

}
