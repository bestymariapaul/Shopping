import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  private cartCount = new ReplaySubject<number>(1); 
  cartCount$ = this.cartCount.asObservable();

  constructor() { }
  setCartCount(count: number) { //load values stored in cart beforehand
    // encapsulate with logic to set local storage
    localStorage.setItem("cart_count", JSON.stringify(count)); //stored in localstorage parameter passed in function is stored
    this.cartCount.next(count); //when next is called, the value is multicasted to all subscribers
  }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
     
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}

