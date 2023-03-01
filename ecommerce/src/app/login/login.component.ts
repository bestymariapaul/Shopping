import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  productdata:any;
  loginForm!: FormGroup;
  msg='Login Success!!'
  loggedin=false;
  
  constructor(private formBuilder:FormBuilder, private http:HttpClient,private router:Router,private authService: LoginService) { }
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  login(){
    this.authService.login()
    this.authService.sendMessage(this.loginForm.value).subscribe();
  }
logout(){ }
}
