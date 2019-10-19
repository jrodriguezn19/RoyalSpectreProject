import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { Project } from '../project.model';
import Axios from 'axios';
import { filter } from 'rxjs/operators';
import { User } from '../user.model';

@Component({
  selector: 'app-profile-anonymous',
  templateUrl: './profile-anonymous.component.html',
  styleUrls: ['./profile-anonymous.component.css']
})
export class ProfileAnonymousComponent implements OnInit {

  //Initiate desired field
  id: any;
  paramsSub: any;
  projects: Project[] = [];
  projectsUpdated =new Subject<Project[]>();
  users: User[] = [];
  userUpdated =new Subject<User[]>();
  constructor(private activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    //Initiate projects user
    //Get id from previous page
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = params['id']);
    //When user click, refresh the page
    //#1 This code by Simon McClive on Medium for reload the same url
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      //Fetch projects and user
      this.getProject();
      this.getUser();
    });
  }
  //a request function to get projects from the Backend
  getProject(){
    Axios.post<{message: string, projects: Project[]}>('http://localhost:8000/projectUser',{ id_user: this.id })
    .then((projectData) => {
      this.projects = projectData.data.projects;
      this.projectsUpdated.next([...this.projects]);
      console.log(this.projects);
    });
  }
  //a request function to get user from the Backend
  getUser(){
    Axios.post('http://localhost:8000/detailUser',{ id_user: this.id })
    .then(userData => {
      this.users = userData.data;
      console.log(userData.data);
    });
  }
}
