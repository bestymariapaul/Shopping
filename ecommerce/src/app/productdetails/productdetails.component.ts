import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  public products : any = [];
  public grandTotal !:number;
  cartItemList:any
  productList:any
  
  constructor(private cartService : CartService, private http:HttpClient) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products=res;
    })
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
    
  }
  addtoCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    console.log(this.cartItemList)
  }

}
