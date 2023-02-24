import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent {
  // position="center"
  // productdata:any
  // searchkey:string ="";
  // public products : any=[];
  Jewellery: any
  Handbag: any
  Footwear: any
  Accessories: any
  Form!: FormGroup;



  constructor(private formbuilder: FormBuilder) {
    this.fetchData()
  }
  ngOnInit(): void {
    this.Form = this.formbuilder.group({
      productName: ['', [Validators.required]], //same as the name given in the form control name
      productPrice: ['', [Validators.required]],
      productType: ['', [Validators.required]],
      productImage: ['', [Validators.required]],
    })
  }
  fill(Form: FormGroup) {
    axios({
      method: 'post',
      url: 'http://localhost:3001/' + Form.value.productType,
      data: {
        name: Form.value.productName,
        price: Form.value.productPrice,
        image: Form.value.productImage,
      }
    }).then(res => {
      console.log(res);
      this.fetchData()
      alert("Success");
    })
  }
  deleteJewellery(id: any) {
    console.log(id);   //row.id is taken from home-admin html
    if (confirm("Do you want to delete this item?")) {
      axios.delete("http://localhost:3001/Jewellery/" + id).then(() => { //delete the corresponding id values using axios
        this.fetchJewellery() // after successful delete(.then) sedan variable updated and table is called

      })

    }
  }
  deleteHandbag(id: any) {
    console.log(id);
    if (confirm("Do you want to delete this item?")) {
      axios.delete("http://localhost:3001/handbags/" + id).then(() => {
        this.fetchHandbag()

      })

    }
  }

  deleteFootwear(id: any) {
    console.log(id);
    if (confirm("Do you want to delete this item?")) {
      axios.delete("http://localhost:3001/footware/" + id).then(() => {
        this.fetchFootwear()

      })

    }
  }
  deleteAccessories(id: any) {
    console.log(id);
    if (confirm("Do you want to delete this item?")) {
      axios.delete("http://localhost:3001/accessories/" + id).then(() => {
        this.fetchAccessories()

      })

    }
  }
  fetchJewellery() {
    axios.get('http://localhost:3001/Jewellery', {
    }).then(result => {                         //(.then)=> get is called first and if successful goes to next function

      console.log(result)
      this.Jewellery = result.data
    })
  }

  fetchHandbag() {

    axios.get('http://localhost:3001/handbags', {
    }).then(result => {

      console.log(result)
      this.Handbag = result.data
    })
  }

  fetchFootwear() {
    axios.get('http://localhost:3001/footware', {
    }).then(result => {

      console.log(result)
      this.Footwear = result.data
    })
  }
  fetchAccessories() {
    axios.get('http://localhost:3001/accessories', {
    }).then(result => {

      console.log(result)
      this.Accessories = result.data
    })
  }
  fetchData() {
    axios.get('http://localhost:3001/Jewellery', { //this fetches all the data and is called only once in the constructor
    }).then(result => {

      console.log(result)
      this.Jewellery = result.data

      axios.get('http://localhost:3001/handbags', {
      }).then(result => {

        console.log(result)
        this.Handbag = result.data

        axios.get('http://localhost:3001/footware', {
        }).then(result => {

          console.log(result)
          this.Footwear = result.data

          axios.get('http://localhost:3001/accessories', {
      }).then(result => {

        console.log(result)
        this.Accessories = result.data
      })
          
        })

      })

    })
      .catch(error => {
        console.log(error);
      })
  }

  //   this.service.Products()
  //   .subscribe(res=>{
  //     this.products=res;
  //   })
  //   this.service.Products().subscribe((data)=>{
  //     this.products=data;
  
  //     this.products.forEach((a:any) => {
  //       Object.assign(a,{quantity:1,total:a.price});
        
  //     });  
  //   });
  // }
  // addtocart(item:any){
  //   this.admin.addtoCart(item);
    
  // }
  // addproduct(item:any){
  //   this.http.post<any>("http://localhost:3001/Jewellery",this.admin.addtoCart)
  //   .subscribe((res)=>{
  //     console.log(res)
 
  //   })
  // }
  // removeitem(item:any){
    
  // }
  // deleteUser(name: any) {
  //   console.log(name);   //row.id is taken from home-admin html
  //   this.http.delete("http://localhost:3000/Jewellery/" + name)
  //   .subscribe((res)=>{
  //     this.fetch()
  //   })
  // }
  //     fetch(){
  //       this.http.get('http://localhost:3000/Jewellery',)
  //       .subscribe()

  //     }
}
