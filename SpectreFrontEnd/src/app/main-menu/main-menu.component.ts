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
  sortBy: String = 'newest';
  ngOnInit() {
    AOS.init({
      offset: 200, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000 // values from 0 to 3000, with step 50ms
    });
    //localStorage.removeItem('sortBy');
    this.sortBy = localStorage.getItem('paramSorting');
   
    if (this.sortBy === 'newest') {
      this.getProjectSortNewest();
    } else {
      this.getProjectSortPopular();
    }

  }
  getProjectSortNewest() {
    localStorage.setItem('paramSorting', 'newest');
    //alert("Setup to " + localStorage.getItem('sortBy'));
    Axios.get<{ message: string, projects: Project[] }>('http://ec2-13-59-247-94.us-east-2.compute.amazonaws.com/projectNewest')
      .then((projectData) => {
        this.projects = projectData.data.projects;
        this.projectsUpdated.next([...this.projects]);
        console.log(this.projects);

      });
  }

  getProjectSortPopular() {
    localStorage.setItem('paramSorting', 'popular');
    //alert("Setup to " + localStorage.getItem('sortBy'));
    Axios.get<{ message: string, projects: Project[] }>('http://ec2-13-59-247-94.us-east-2.compute.amazonaws.com/projectPopular')
      .then((projectData) => {
        this.projects = projectData.data.projects;
        this.projectsUpdated.next([...this.projects]);
        console.log(this.projects);

      });

  }
}


