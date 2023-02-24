import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { BeautyComponent } from './beauty/beauty.component';
import { HandbagsComponent } from './handbags/handbags.component';
import { FootwearComponent } from './footwear/footwear.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { FilterPipe } from './filter.pipe';
import { AdminpageComponent } from './adminpage/adminpage.component';


import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminloginComponent,
    HomeComponent,
    JewelleryComponent,
    BeautyComponent,
    HandbagsComponent,
    FootwearComponent,
    AccessoriesComponent,
    CartComponent,
    SignupComponent,
    FilterPipe,
    AdminpageComponent,
    ProductsComponent,
    ProductdetailsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    SlickCarouselModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
