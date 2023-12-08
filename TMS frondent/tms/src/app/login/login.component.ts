import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  user:any;
  constructor(private fb:FormBuilder,private ls:LoginService,private router:Router) { 
    this.loginForm=this.fb.group({
      "id":[],
      "password":[]
    })
  }

  ngOnInit(): void {
  }

  fnLogin()
  {
    var ar=this.loginForm.value;
    console.log("We are sending..");
    console.log(ar);
    this.ls.fnValidateLogin(ar).subscribe((data)=>{
      console.log("We recieved.");
      console.log(data);
      if(data!=null)
      {
        var obj=JSON.stringify(data);
        console.log("writing jsonto localstorage as: ")
        console.log(obj);
        localStorage.setItem("user",obj);
        this.user=data;
        if(this.user.role=='admin')
        {
          this.router.navigate(["admind/home"]);
        }
        if(this.user.role=='user')
        {
          this.router.navigate(["userd"]);
        }
      }
    })
  }

}
