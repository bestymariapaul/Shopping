import { Component,OnInit} from '@angular/core';
import { CartService } from './cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  list: any[] = ['User Login', 'Admin Login'];
  title = 'ecommerce';
  public products : any = [];
  productdata:any;
  public searchTerm : string ='';
  public totalItem : number = 0;
  constructor(private cartService : CartService) { }
  jewellery=""
  position="center";
  CartService: any;
  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}