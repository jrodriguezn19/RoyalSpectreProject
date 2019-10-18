
// Auth Guard is used so that users must be logged in to see pages which have a route guard assigned
// to them in the routing module. The profile page is used for this so that unauthenticated users
// cannot just enter /profile path in the browswer URL to view profile page.
// based on code from Auth0 quick start guide: https://auth0.com/docs/quickstart/spa/angular2

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean|UrlTree> | boolean {
    return this.auth.isAuthenticated$.pipe(
      tap(loggedIn => {
        if (!loggedIn) {
          this.auth.login(state.url);
        }
      })
    );
  }

}