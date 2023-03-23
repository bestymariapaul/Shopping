import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  products:any[]=[]
  Paymentmethod: any[] = ['Cash On Delivery', 'Debit Card', 'Credit Card', 'GPay'];
  constructor( private cartService: CartService){}
  ngOnInit(): void {
    this.products=this.cartService.getCartItems()
  }
  onChange(event: any){
    console.log(event.value);
  }
  msg=""
  mg=''
  mssg=""
  position="center";
  emptycart(){
    alert("Your Order Placed Successfully")
    this.cartService.removeAllCart();
    // this.cartService.clearCart()

  }
  cart(){
    this.cartService.cartItemList
  }
}
