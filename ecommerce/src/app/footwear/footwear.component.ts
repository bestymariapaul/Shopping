import { Component ,OnInit} from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footwear',
  templateUrl: './footwear.component.html',
  styleUrls: ['./footwear.component.css']
})
export class FootwearComponent implements OnInit{
  position="center"
  productdata:any
  searchkey:string ="";



  constructor(private service:ProductsService,private CartService:CartService, private logg: LoginService,private router:Router) { }

  ngOnInit(): void {
    this.service.getAllproducts().subscribe((data)=>{  
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
