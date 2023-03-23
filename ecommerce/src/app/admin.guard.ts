import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private log:LoginService,private router:Router){}
  canActivate()
   {
    if(this.log.adminlog==true){
    alert("Admin cannot navigate to user page ")
    return false;
    
    }
    else{
      
      return true
    }
  }
  
}
