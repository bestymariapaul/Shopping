import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [  
    { img1: "../assets/img/img6.jpg"  } ,  //earring
    { img2: "../assets/img/img8.jpg" },  //ring
    { img3: "../assets/img/nyka3.webp" },  //diamond
    { img4: "../assets/img/nyka2.webp" },  //gold
    { img5: "../assets/img/nyka1.webp" }  //home
  ]; 
  slideConfig = {  
    "slidesToShow": 1,  
    "slidesToScroll": 1,  
    "dots": true,  
    "infinite": true , 
  };
  constructor(private router:Router) { }
}
