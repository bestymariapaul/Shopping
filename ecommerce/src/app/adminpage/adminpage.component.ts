import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
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



  constructor(private service:ProductsService,private CartService:AdminserviceService,private http:HttpClient) { }
  ngOnInit(): void {
    this.service.Products().subscribe((data)=>{
      this.productdata=data;
  
      this.productdata.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
        
      });  
    });
  }
  addtocart(item:any){
    this.CartService.addtoCart(item);
    
  }
  addproduct(){
    this.http.post<any>("http://localhost:3001/Jewellery",this.CartService.productList)
    .subscribe((res)=>{    })
  }

}
