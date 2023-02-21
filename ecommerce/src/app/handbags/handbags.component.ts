import { Component,OnInit} from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-handbags',
  templateUrl: './handbags.component.html',
  styleUrls: ['./handbags.component.css']
})
export class HandbagsComponent implements OnInit {
  position="center"
  productdata:any
  searchkey:string ="";



  constructor(private service:ProductsService,private CartService:CartService) { }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((data)=>{
      this.productdata=data;
  
      this.productdata.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
        
      });  
    });
    this.CartService.search.subscribe((val:any)=>{
      this.searchkey=val;
    })
  }
  addtocart(item:any){
    this.CartService.addtoCart(item);
    
  }

}



