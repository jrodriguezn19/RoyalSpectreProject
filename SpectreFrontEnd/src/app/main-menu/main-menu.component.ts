import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
// Added by George
import  {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(){
    AOS.init({
      offset: 200, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000 // values from 0 to 3000, with step 50ms
    });
   }

   selectedFile : File = null;

   onFileSelected(event){
     console.log(event);
     this.selectedFile = <File>event.target.files[0];
   }

   onUpload(){
     console.log("uploading");
     const fd = new FormData();
     fd.append('Testing', this.selectedFile, this.selectedFile.name);
     this.http.post('https://us-central1-royalspectreproject.cloudfunctions.net/uploadFile', fd ).subscribe( res =>{
        console.log("Uploaded finished"); 
        console.log(res);
     })

   }

}
