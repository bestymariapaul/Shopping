import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public products : any = [];
  cartItems: any[] = [];
  public grandTotal !:number;
  constructor(private cartService : CartService, private http:HttpClient) { }

  ngOnInit(): void {
    this.cartItems=this.cartService.getCartItems()
    // this.cartService.getProducts()
    // .subscribe(res=>{
    //   this.products=res;
    // })
    this.cartService.getProducts()  
    .subscribe(res=>{
      // console.log("productlist",this.cartService.cartItemList)
      // this.http.post("http://localhost:3001/cart",this.cartService.cartItemList).subscribe((re)=>{})
      this.products = res;
      this.grandTotal=this.cartService.getTotalPrice();
      
    })
    
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  clearCart() {
    this.cartService.clearCart();
  }
// cart(){
//   this.http.post<any>("http://localhost:3001/cart",this.cartService.getProducts)
//     .subscribe((res)=>{});
// }
}


