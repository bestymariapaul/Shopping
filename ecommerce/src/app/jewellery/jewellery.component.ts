import { Component,OnInit} from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-jewellery',
  templateUrl: './jewellery.component.html',
  styleUrls: ['./jewellery.component.css']
})
export class JewelleryComponent implements OnInit{
  position="center"
  productdata:any
  searchkey:string ="";
  name="";
  loged=false;


  constructor(private router: Router, private service:ProductsService,
    private CartService:CartService, private logg: LoginService) {
   }
  

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((data)=>{
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
      this.loged==true
      this.CartService.addtoCart(item);
      this.router.navigate(['cart']);
    }
    else{
      this.router.navigate(['login']);
    }
    
      

    }
    
    
  }
   
  
