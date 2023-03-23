import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AdminGuard } from './admin.guard';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AuthGuard } from './auth.guard';
import { BeautyComponent } from './beauty/beauty.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CommonComponent } from './common/common.component';
import { FootwearComponent } from './footwear/footwear.component';
import { HandbagsComponent } from './handbags/handbags.component';
import { HomeComponent } from './home/home.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path: 'login',component: LoginComponent},
  {path: 'home',component:HomeComponent,canActivate:[AdminGuard]},
  {path: 'jewellery',component:JewelleryComponent,canActivate:[AdminGuard]},
  {path: 'beauty',component:BeautyComponent,canActivate:[AdminGuard]},
  {path: 'footwear',component:FootwearComponent,canActivate:[AdminGuard]},
  {path: 'handbags',component:HandbagsComponent,canActivate:[AdminGuard]},
  {path: 'accessories',component:AccessoriesComponent,canActivate:[AdminGuard]},
  {path: 'cart',component:CartComponent,canActivate:[AdminGuard]},
  {path: 'signup',component:SignupComponent,canActivate:[AdminGuard]},
  {path: 'adminpage',component:AdminpageComponent,canActivate:[AuthGuard]},
  {path: 'checkout',component:CheckoutComponent,canActivate:[AdminGuard]},
  {path: 'orders',component:OrdersComponent,canActivate:[AdminGuard]},
  {path: 'common',component:CommonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
