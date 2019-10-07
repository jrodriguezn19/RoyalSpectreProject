import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Project } from '../project.model';
import Axios from 'axios';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  projects: Project[] = [];
  projectsUpdated =new Subject<Project[]>();
  sortBy : String = "newest";
  ngOnInit(){
    AOS.init({
      offset: 200, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000 // values from 0 to 3000, with step 50ms
    });
    this.sortBy = localStorage.getItem('sortBy');
    
    if(this.sortBy === "newest"){
      this.getProjectSortNewest();
    } else {
      this.getProjectSortPopular();
    }

   }
   getProjectSortNewest(){
    localStorage.setItem('sortBy', 'newest');
    Axios.get<{message: string, projects: Project[]}>('http://localhost:8000/projectNewest')
    .then((projectData) => {
      this.projects = projectData.data.projects;
      this.projectsUpdated.next([...this.projects]);
      console.log(this.projects);
      
    });
  }
  
  getProjectSortPopular(){
    localStorage.setItem('sortBy', 'popular');
    Axios.get<{message: string, projects: Project[]}>('http://localhost:8000/projectPopular')
    .then((projectData) => {
      this.projects = projectData.data.projects;
      this.projectsUpdated.next([...this.projects]);
      console.log(this.projects);
      
    });
    
  }
}


