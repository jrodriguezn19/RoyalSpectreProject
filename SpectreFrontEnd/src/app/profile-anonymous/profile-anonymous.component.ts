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

  id: any;
  paramsSub: any;
  projects: Project[] = [];
  projectsUpdated =new Subject<Project[]>();
  users: User[] = [];
  userUpdated =new Subject<User[]>();
  constructor(private activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    let that = this;
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = params['id']);
   
    
    //#1 start
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.getProject();
      this.getUser();
    });
  }
  getProject(){
    Axios.post<{message: string, projects: Project[]}>('http://localhost:8000/projectUser',{ id_user: this.id })
    .then((projectData) => {
      this.projects = projectData.data.projects;
      this.projectsUpdated.next([...this.projects]);
      console.log(this.projects);
    });
  }
  getUser(){
    Axios.post('http://localhost:8000/detailUser',{ id_user: this.id })
    .then(userData => {
      this.users = userData.data;
      console.log(userData.data);
    });
  }
}
