import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule }    from '@angular/common/http';
import { CallbackComponent } from './callback/callback.component';
import { AngularFireModule } from '@angular/fire'; //Firebase Basic module import
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage'; //Firebase Storage module import
import { environment } from '../environments/environment'; 
import { ProfileAnonymousComponent } from './profile-anonymous/profile-anonymous.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    MainMenuComponent,
    ProjectDetailComponent,
    HomeComponent,
    ProfileComponent,
    TopMenuComponent,
    LoginComponent,
    NavBarComponent,
    CallbackComponent,
    ProfileAnonymousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireStorageModule 
  ],
  providers: [
    { provide: StorageBucket, useValue: 'gs://royalspectreproject.appspot.com/' } //Firebase Storage Bucket configured
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
