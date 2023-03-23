import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent {
  position="center"
  productdata:any
  searchkey:string ="";
  loged=false;
  flag=0

  constructor(private service:ProductsService,private CartService:CartService, private logg: LoginService,private router:Router) {
    // this.flag=this.service.flag
    // console.log("common constructor",this.flag)
    this.flag=this.service.count
   }

   ngDoCheck() {
   
    if(this.service.count===3){
    this.service.getAllproducts().subscribe((data)=>{  
      this.productdata=data;
  
      this.productdata.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});       
      });  
    });
  }
  else if(this.service.count===2) 
  {
    this.service.getallProducts().subscribe((data)=>{  
      this.productdata=data;
  
      this.productdata.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});       
      });  
    });
  }
  else if(this.service.count===1) 
  {
    this.service.getAllProducts().subscribe((data)=>{  
      this.productdata=data;
  
      this.productdata.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});       
      });  
    });
  }
  else if(this.service.count===4) 
  {
    this.service.getallproducts().subscribe((data)=>{  
      this.productdata=data;
  
      this.productdata.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});       
      });  
    });
  }
  else if(this.service.count===5) 
  {
    this.service.getAllProduct().subscribe((data)=>{  
      this.productdata=data;
  
      this.productdata.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});       
      });  
    });
  }
   }
   ngOnInit(): void {
    
    // this.service.products(this.flag)
    
  //   this.service.getAllproducts().subscribe((data)=>{  
  //     this.productdata=data;
  
  //     this.productdata.forEach((a:any) => {
  //       Object.assign(a,{quantity:1,total:a.price});       
  //     });  
  //   });
  //   this.CartService.search.subscribe((val:any)=>{
  //     this.searchkey=val;
  //   })
  }
  
  addtocart(item:any){
    if (this.logg.loggedIn==true) {
      this.loged===true
      this.CartService.addtoCart(item);
    }
    else{
      this.router.navigate(['login']);
    }
    
  }
}
