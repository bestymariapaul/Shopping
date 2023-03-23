import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent {
  position="center"
  productdata:any
  searchkey:string ="";
  loged=false;
  flag=4



  constructor(private service:ProductsService,private CartService:CartService,private logg:LoginService, private router: Router) {
    this.service.count=this.flag
    console.log("accessories",this.service.count)
   }

  ngOnInit(): void {
    // this.service.getallproducts().subscribe((data)=>{
    //   this.productdata=data;
  
    //   this.productdata.forEach((a:any) => {
    //     Object.assign(a,{quantity:1,total:a.price});
        
    //   });  
    // });
    // this.CartService.search.subscribe((val:any)=>{
    //   this.searchkey=val;
    // })
  }
  // addtocart(item:any){
  //   if (this.logg.loggedIn==true) {
  //     this.loged===true
  //     this.CartService.addtoCart(item);
  //     // this.router.navigate(['cart']);
  //   }
  //   else{
  //     this.router.navigate(['login']);
  //   }
    
    
  // }
    
  }



