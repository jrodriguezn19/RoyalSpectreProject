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
  projects: Project[] = [];
  projectsUpdated =new Subject<Project[]>();
  users: User[] = [];
  usersUpdated =new Subject<User[]>();
  //sortBy : String = "newest";
  constructor() { }

  ngOnInit() {
    //localStorage.setItem('sortBy', 'popular');
    Axios.get<{message: string, projects: Project[]}>('http://ec2-13-59-247-94.us-east-2.compute.amazonaws.com/projectPopularSideMenu')
    .then((projectData) => {
      this.projects = projectData.data.projects;
      this.projectsUpdated.next([...this.projects]);
      console.log(this.projects);
      
    });
    Axios.get<{message: string, users: User[]}>('http://ec2-13-59-247-94.us-east-2.compute.amazonaws.com/peoplePopularSideMenu')
    .then((userData) => {
      this.users = userData.data.users;
      this.usersUpdated.next([...this.users]);
      console.log(this.users);
      
    });

    
  }

}
