import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Subject } from 'rxjs';
import Axios from 'axios';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  projects: Project[] = [];
  projectsUpdated =new Subject<Project[]>();
  sortBy : String = "newest";
  constructor() { }

  ngOnInit() {
    localStorage.setItem('sortBy', 'popular');
    Axios.get<{message: string, projects: Project[]}>('http://localhost:8000/projectPopularSideMenu')
    .then((projectData) => {
      this.projects = projectData.data.projects;
      this.projectsUpdated.next([...this.projects]);
      console.log(this.projects);
      
    });
  }

}
