import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import  {HttpClient, HttpEventType} from '@angular/common/http';
//Libraries for Firebase Storage use
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-external-api',
  templateUrl: './external-api.component.html',
  styleUrls: ['./external-api.component.css']
})
export class ExternalApiComponent implements OnInit {
  responseJson: string;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  
  constructor(private api: ApiService, private http: HttpClient, private storage: AngularFireStorage) { }
  
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = file.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
     )
    .subscribe()
  }

  ngOnInit() {
    
  }


  pingApi() {
    this.api.ping$().subscribe(
      res => this.responseJson = res
    );
  }

 
  
  /**
   * The code below was the old method to upload images to Firebase that we can delete once the new fucntion is working properly
   * 
   * 
   * 
   */

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
  
  selectedFile : File = null;

  onFileSelected(event){
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }







}