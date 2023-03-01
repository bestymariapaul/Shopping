import { Component,OnInit} from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-handbags',
  templateUrl: './handbags.component.html',
  styleUrls: ['./handbags.component.css']
})
export class HandbagsComponent implements OnInit {
  position="center"
  productdata:any
  searchkey:string ="";



  constructor(private service:ProductsService,  private logg: LoginService,private router:Router, private CartService:CartService) { }

  ngOnInit(): void {
    this.service.getallProducts().subscribe((data)=>{
      this.productdata=data;
  
      this.productdata.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
        
      });  
    });
    this.CartService.search.subscribe((val:any)=>{
      this.searchkey=val;
    })
  }
  addtocart(item:any){
    if (this.logg.loggedIn==true) {
      this.CartService.addtoCart(item);
      this.router.navigate(['cart']);
    }
    else{
      this.router.navigate(['login']);
    }
    
  }

}



