import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private log:LoginService,private router:Router){}
  canActivate() {
    
    if (this.log.loggedIn==true) {
      return true;
    }
     else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
