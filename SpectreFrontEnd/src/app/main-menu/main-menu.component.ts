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
  projectsUpdated = new Subject<Project[]>();
  //Sorting set to newest as default
  sortBy: String = 'newest';
  ngOnInit() {
    AOS.init({
      offset: 200, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000 // values from 0 to 3000, with step 50ms
    });
    //get current setting for sorting from local variable
    this.sortBy = localStorage.getItem('paramSorting');
    //Set up projects sorting list
    if (this.sortBy === 'newest') {
      this.getProjectSortNewest();
    } else {
      this.getProjectSortPopular();
    }
  }
  //A function to get project sorted by the newest
  getProjectSortNewest() {
    localStorage.setItem('paramSorting', 'newest');
    //Update current state value of sorting variable to Newest
    Axios.get<{ message: string, projects: Project[] }>('http://localhost:8000/projectNewest')
      .then((projectData) => {
        this.projects = projectData.data.projects;
        this.projectsUpdated.next([...this.projects]);
        console.log(this.projects);
      });
  }
  //A function to get project sorted by the popular
  getProjectSortPopular() {
    //Update current state value of sorting variable to popular
    localStorage.setItem('paramSorting', 'popular');
    Axios.get<{ message: string, projects: Project[] }>('http://localhost:8000/projectPopular')
      .then((projectData) => {
        this.projects = projectData.data.projects;
        this.projectsUpdated.next([...this.projects]);
        console.log(this.projects);

      });

  }
}


