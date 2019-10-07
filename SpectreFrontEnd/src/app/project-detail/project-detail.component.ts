import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { Project } from '../project.model';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  id: any;
  paramsSub: any;
  project: Project = null;
  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    let that = this;
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = params['id']);
    axios.post('http://localhost:8000/selectedProject', { id: this.id })
      .then(function (response) {
        console.log(response.data['message']);
        //this.project = response.data.project;
        that.project = response.data.project;
        
      })
      .catch(function (error) {
        console.log(error);
      });


  }

}
