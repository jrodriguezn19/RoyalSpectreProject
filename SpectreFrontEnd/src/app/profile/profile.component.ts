import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import axios from 'axios';
import { Project } from '../project.model';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: any;
  paramsSub: any;
  projects: Project[] = [];
  projectsUpdated =new Subject<Project[]>();
  constructor(private activatedRoute: ActivatedRoute, public auth: AuthService) { }
  
  
  ngOnInit() {

    let that = this;
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = params['id']);
   
    axios.post<{message: string, projects: Project[]}>('http://localhost:8000/projectUser',{ id_user: this.id })
    .then((projectData) => {
      this.projects = projectData.data.projects;
      this.projectsUpdated.next([...this.projects]);
      console.log(this.projects);
    });
  }

  enteredProjectName: String = '';
  enteredSummary: String = '';
  imageUpload: String = '';
  id_user: String;
  target_fund: String = '';
  status: String;

  fileData: File = null;
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
  }
  selectedFile: File = null;

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  CreateProject(id_user: String, user_name: String) {
    
    let fileName = 'uio';
    let ext = this.selectedFile.name.split('.')[1];
    
    const fd = new FormData();
    let that = this;
    
    axios.post('http://localhost:8000/imageName')
      .then(function (response) {
        fileName = response.data + '.' + ext;
        let url = 'https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/' + fileName + '?alt=media&token=57f0fd2a-30f4-469c-8371-d30e66a47975';
        fd.append('Testing', that.selectedFile, fileName);
        axios.post('https://us-central1-royalspectreproject.cloudfunctions.net/uploadFile', fd).then(res => {
          console.log(res);
          location.reload();
        })
        axios.post('http://localhost:8000/createProject', { user_name: user_name, id_user: id_user, target_fund: that.target_fund, status: that.status, image_url: url })
          .then(function (response) {
            console.log(response.data['message']);
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });

      
  }

}
