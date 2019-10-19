import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Subject } from 'rxjs';
import Axios from 'axios';
import { User } from '../user.model';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  //Initiate needed field
  projects: Project[] = [];
  projectsUpdated =new Subject<Project[]>();
  users: User[] = [];
  usersUpdated =new Subject<User[]>();
  constructor() { }

  ngOnInit() {
    //send request to backend to get 6 most popular projects
    Axios.get<{message: string, projects: Project[]}>('http://localhost:8000/projectPopularSideMenu')
    .then((projectData) => {
      this.projects = projectData.data.projects;
      this.projectsUpdated.next([...this.projects]);
      console.log(this.projects);
    });
    //send request to backend to get 6 most popular users
    Axios.get<{message: string, users: User[]}>('http://localhost:8000/peoplePopularSideMenu')
    .then((userData) => {
      this.users = userData.data.users;
      this.usersUpdated.next([...this.users]);
      console.log(this.users);
    });
  }
}
