import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent {
  position="center"
  productdata:any
  searchkey:string ="";
  public products : any=[];



  constructor(private service:ProductsService,private cartService:CartService,private http:HttpClient, private admin: AdminserviceService) { }
  ngOnInit(): void {
    this.service.Products()
    .subscribe(res=>{
      this.products=res;
    })
    this.service.Products().subscribe((data)=>{
      this.products=data;
  
      this.products.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
        
      });  
    });
  }
  addtocart(item:any){
    this.admin.addtoCart(item);
    
  }
  addproduct(item:any){
    this.http.post<any>("http://localhost:3001/Jewellery",this.admin.addtoCart)
    .subscribe((res)=>{
      console.log(res)
 
    })
  }
  removeitem(item:any){
    this.admin.removeCartItem(item);

  }

}
