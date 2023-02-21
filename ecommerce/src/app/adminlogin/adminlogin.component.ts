import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  productdata:any;
  loginForm!: FormGroup;
  constructor(private formBuilder:FormBuilder, private http:HttpClient,private router:Router) { }
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  login()
{

  this.http.get<any>( "http://localhost:3001/signup")
  .subscribe((res)=>{
    const user= res.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
    });

    if(user){
      alert("Login Success!!");
      this.loginForm.reset();
      this.router.navigate(['home']);
    }
    else{
      alert("User Not Found!!")
    }
   

  })

}
}
