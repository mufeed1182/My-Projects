import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productForm:any;
  products:any;
  user: any;
  constructor(private fb:FormBuilder,private ps:ProductService,private router:Router) { 
    this.productForm=this.fb.group({
      "id":[],
      "name":[],
      "description":[],
      "price":[],
      "category":[],
      "keywords":[]
    });
  }

  ngOnInit(): void {
    var str=<any>localStorage.getItem("user");
    var user=<any>JSON.parse(str);
    console.log("The user object is: ")
    console.log(user);
    if (user==null)
    {
      this.router.navigate(['404']);
      return ;
    }else{
      this.user=user;
      if(user.role=='Merchant')
      {
        this.ps.fnFindProductByUser(user).subscribe((data)=>{
          this.products=data;
        });
      }else{
        this.ps.fnGetAllProducts().subscribe((data)=>{
          this.products=data;
        });
      }
    }
    
  }

  fnAdd()
  {
    var pd=this.productForm.value;
    var str=<any>localStorage.getItem("user");
    var user=JSON.parse(str);
    pd.user=user;
    console.log("We are sending product info as:");
    console.log(pd);
    this.ps.fnAddProduct(pd).subscribe((data)=>{
      console.log("Response while adding is: ");
      console.log(data);
    })
  }

}
