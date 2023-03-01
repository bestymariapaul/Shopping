import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  loggedIn=false
  public email:any
  public  password:any
  
  constructor(private http:HttpClient, private router: Router) { }
  sendMessage(formData:any) {
    return this.http.post('http://localhost:3001/login',formData);
  }
  
  login() {
    this.http.get<any>( "http://localhost:3001/login").subscribe((res)=>{
      const user1= res.find((b:any)=>{
        console.log(b.email)
        console.log(b.password)
        this.email=b.email
        this.password=b.password
      });
      this.http.get<any>( "http://localhost:3001/signup").subscribe((res)=>{
        const user= res.find((a:any)=>{
          return a.email === this.email && a.password === this.password
        });
        if(user){
          this.loggedIn=true
          alert("Login successfull");
          if(this.loggedIn=true)
          this.router.navigate(['cart']);
        }
        else{
          alert("User Not Found!!")
        }
      })
    })
  }
  logout(){
    this.loggedIn==false;
    alert("You have successfully logged out")
    this.router.navigate(['login']);
  }
}