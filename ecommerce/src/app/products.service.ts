import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
public search = new BehaviorSubject<string>("");

  constructor(private client:HttpClient) { }
  getAllProducts(){
    return this.client.get("http://localhost:3001/Jewellery")
  }
  getallProducts(){
    return this.client.get("http://localhost:3001/handbags")
  }
  getAllproducts(){
    return this.client.get("http://localhost:3001/footware")
  }
  getallproducts(){
    return this.client.get("http://localhost:3001/accessories")
  }
  getAllProduct(){
    return this.client.get("http://localhost:3001/beauty")
  }
  Products(){
    return this.client.get("http://localhost:3001/Allproducts")
  }
}