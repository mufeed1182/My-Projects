import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:any;
  user:any;

  constructor(private fb:FormBuilder,private us:UserService,private router:Router) {
    this.signupForm=this.fb.group({
      "id":[],
      "name":[],
      "email":[],
      "phoneNo":[],
      "address":[],
      "password":[],
      "role":[]
    })
   }

  ngOnInit(): void {
  }

  fnSignUp()
  {
    var usr=this.signupForm.value;
    console.log("We Are Sending ...");
    console.log(usr);
    this.us.fnSignUp(usr).subscribe((data)=>{
      console.log("We are recieved..");
      console.log(data);
      // this.user=data;
      // alert(this.user.id+" is your Login Id")
    });
    this.router.navigate(["login"]);
  }
}
