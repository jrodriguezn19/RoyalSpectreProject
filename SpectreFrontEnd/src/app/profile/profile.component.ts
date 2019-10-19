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
    //Initiate projects user
    //Get id project from previous page
    //Send request to the Backend 
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = params['id']);
    axios.post<{message: string, projects: Project[]}>('http://localhost:8000/projectUser',{ id_user: this.id })
    .then((projectData) => {
      this.projects = projectData.data.projects;
      this.projectsUpdated.next([...this.projects]);
      console.log(this.projects);
    });
  }

  //Initiate 4 main field for projects
  id_user: String;
  target_fund: String = '';
  status: String;
  fileData: File = null;
  selectedFile: File = null;
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
  }
  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }
  //function Create Project to send entered data to the Backend
  CreateProject(id_user: String, user_name: String, photo_profile: String) {
    //Prepare variable. there's no meaning of "uio". it just initialisation
    let fileName = 'uio';
    //Split the name to get extention of the image 
    let ext = this.selectedFile.name.split('.')[1];
    const fd = new FormData();
    //This is quite unique, "that" variable belongs to this, and uses for double this
    let that = this;
    //Send those data to the Backend
    axios.post('http://localhost:8000/imageName')
      .then(function (response) {
        //setup new unique image name 
        fileName = response.data + '.' + ext;
        //Set up image in Firebase link to store in MongoDB
        let url = 'https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/' + fileName + '?alt=media&token=57f0fd2a-30f4-469c-8371-d30e66a47975';
        fd.append('Testing', that.selectedFile, fileName);
        //Post image to Firebase
        axios.post('https://us-central1-royalspectreproject.cloudfunctions.net/uploadFile', fd).then(res => {
          console.log(res);
          location.reload();
        })
        //Post project to the Backend
        axios.post('http://localhost:8000/createProject', { user_name: user_name,photo_profile: photo_profile, id_user: id_user, target_fund: that.target_fund, status: that.status, image_url: url })
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
  //Delete project fundtion
  DeleteProject(id_project: String) {
    axios.post('http://localhost:8000/deleteProject', {id_project: id_project})
      .then(document => {
        alert(document.data.message);
        location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
