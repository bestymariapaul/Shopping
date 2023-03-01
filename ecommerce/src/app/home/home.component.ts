import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // images = [  
  //   { img1: "../assets/img/img6.jpg"  } ,  
  //   { img2: "../assets/img/ajio.webp" },  
  //   { img3: "../assets/img/nyka3.webp" }, 
  //   { img4: "../assets/img/nyka2.webp" },  
  //   { img5: "../assets/img/nyka1.webp" }  
  // ]; 
  // slideConfig = {  
  //   "slidesToShow": 1,  
  //   "slidesToScroll": 1,  
  //   "dots": true,  
  //   "infinite": true , 
  // };
  constructor(private router:Router) { }
}
