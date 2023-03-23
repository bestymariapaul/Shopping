import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  products:any[]=[]
  public grandTotal !:number;
  constructor(private cartService : CartService, private http:HttpClient) { }
  ngOnInit(): void {
    this.products=this.cartService.getCartItems()
  }
  position="center"
  // order(item:any){
  //   this.cartService.addtoCart(item)
  // }
}
