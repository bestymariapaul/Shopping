import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { BeautyComponent } from './beauty/beauty.component';
import { CartComponent } from './cart/cart.component';
import { FootwearComponent } from './footwear/footwear.component';
import { HandbagsComponent } from './handbags/handbags.component';
import { HomeComponent } from './home/home.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path: 'login',component: LoginComponent},
  {path: 'adminlogin',component: AdminloginComponent},
  {path: 'home',component:HomeComponent},
  {path: 'jewellery',component:JewelleryComponent},
  {path: 'beauty',component:BeautyComponent},
  {path: 'footwear',component:FootwearComponent},
  {path: 'handbags',component:HandbagsComponent},
  {path: 'accessories',component:AccessoriesComponent},
  {path: 'cart',component:CartComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'adminpage',component:AdminpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
