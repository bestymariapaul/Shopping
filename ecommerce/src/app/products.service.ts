import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
public search = new BehaviorSubject<string>("");
flag:any
count:any
  constructor(private client:HttpClient) { }

  // products(flag:any){
  //   if(flag==1){
  //     this.flag=flag
  //     this.getAllProducts()
  //   }
  //   else if(flag==2){
  //     this.flag=flag
  //     this.getallProducts()
  //       }
  //       else if(flag==3){
  //         this.flag=flag
  //         this.getAllproducts()
  //           }
  //           else if(flag==4){
  //             this.flag=flag
  //             this.getallproducts()
  //               }
  //               else{
  //                 flag=5
  //                 this.getAllProduct()
  //               }
                
  // }


  getAllProducts(){
    // this.flag=1
    return this.client.get("http://localhost:3001/Jewellery")
  }
  getallProducts(){
    // this.flag=2
    return this.client.get("http://localhost:3001/handbags")
  }
  getAllproducts(){
    // this.flag=3
    return this.client.get("http://localhost:3001/footware")
  }
  getallproducts(){
    // this.flag=4
    return this.client.get("http://localhost:3001/accessories")
  }
  getAllProduct(){
    // this.flag=5
    return this.client.get("http://localhost:3001/beauty")
  }
  // Products(){
  //   return this.client.get("http://localhost:3001/Allproducts")
  // }
}