import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  Paymentmethod: any[] = ['Cash On Delivery', 'Debit Card', 'Credit Card', 'GPay'];
  gOnInit(): void {
  }
  onChange(event: any){
    console.log(event.value);
  }
  msg=""
  mg=''
  mssg=""
  onclick(){
    alert("Order placed successfully")
  }
  position="center";
}
