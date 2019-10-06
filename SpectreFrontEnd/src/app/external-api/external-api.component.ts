import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import  {HttpClient, HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-external-api',
  templateUrl: './external-api.component.html',
  styleUrls: ['./external-api.component.css']
})
export class ExternalApiComponent implements OnInit {
  responseJson: string;

  constructor(private api: ApiService, private http: HttpClient) { }


  ngOnInit() {
    
  }
  // This code is based on an tutorial from the user "Academind" on Youtube.com
  // See https://www.youtube.com/watch?v=YkvqLNcJz3Y

  postImage() {
    console.log("uploading");
    const fd = new FormData();
    fd.append('Testing', this.selectedFile, this.selectedFile.name);
    this.http.post('https://us-central1-royalspectreproject.cloudfunctions.net/uploadFile', fd, {
      reportProgress: true,
      observe: 'events'})
      .subscribe( event => {
       if(event.type === HttpEventType.UploadProgress){
        console.log("Upload Progress: " + Math.round(event.loaded/event.total * 100) + "%");
      }else if(event.type === HttpEventType.Response){
        console.log(event);
        alert('Post Uploaded');
      }      
    })

  }

  pingApi() {
    this.api.ping$().subscribe(
      res => this.responseJson = res
    );
  }


  selectedFile : File = null;

  onFileSelected(event){
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }
}