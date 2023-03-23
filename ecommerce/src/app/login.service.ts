import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loggedIn=false
  public adminlog=false
  email: any;
  password: any;
   constructor(private http:HttpClient, private router: Router) { 
  }
  // sendMessage(formData:any) {
  //   return this.http.post('http://localhost:3001/login',formData);
  // }
  
  login(data:any) {
    console.log("data taken",data)
    
      if(data.email==='admin@gmail.com' && data.password==='1234'){
        this.http.get<any>( "http://localhost:3001/signup").subscribe((res)=>{
          const user= res.find((a:any)=>{
          return a.email === data.email && a.password === data.password
        });
        if(user){
          this.loggedIn=true
          this.adminlog=true
          alert("Admin Login successfull");
          this.router.navigate(['adminpage']);
        }
        else{
          alert("Not Found!!")
        }
      })

    }
    else{
      this.http.get<any>( "http://localhost:3001/signup").subscribe((res)=>{
        const user= res.find((a:any)=>{
          return a.email === data.email && a.password === data.password
        });
        if(user){
          this.loggedIn=true
          alert("Login successfull");
          this.router.navigate(['cart']);
        }
        else{
          alert("User Not Found!!")
        }
        
      })

    }
  }

  logout(){
    if(this.adminlog==true){
      this.adminlog=false
    }
    this.loggedIn=false;
    alert("You have successfully logged out")
    this.router.navigate(['login']); 
  }
   
}





















