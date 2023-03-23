import { Component,OnInit} from '@angular/core';
import { CartService } from './cart.service';
import { LoginService } from './login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'ecommerce';
  public products : any = [];
  productdata:any;
  public searchTerm : string ='';
  public totalItem : number = 0;
  loged:any

  constructor(private cartService : CartService,private log:LoginService) {
    
    
   }
  jewellery=""
  position="center";
  CartService: any;
  
  ngOnInit(): void {
    this.loged=false
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
     })
  }
  ngDoCheck() {
    if(this.log.loggedIn==true){
      {
        this.loged=true
        console.log(this.loged)
      }
    }
  }
search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
 
  logout(){
    this.log.logout()
    if(this.log.loggedIn==false){
      this.loged=false
      console.log(this.loged)
      this.cartService.removeAllCart()
    }
  
  }
 
}