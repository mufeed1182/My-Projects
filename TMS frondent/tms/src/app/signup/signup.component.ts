import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:any;
  user:any;
  constructor(private fb:FormBuilder,private ss:SignupService,private router:Router) { 
    this.signupForm=this.fb.group({
      "id":[],
      "fname":[],
      "lname":[],
      "email":[],
      "phoneno":[],
      "role":[],
      "password":[]
    })
  }

  ngOnInit(): void {
  }

  fnSignUp()
  {
    var usr=this.signupForm.value;
    console.log("We Are Sending ...");
    console.log(usr);
    this.ss.fnSignUp(usr).subscribe((data)=>{
      console.log("We are recieved..");
      console.log(data);
      this.user=data;
      alert("Please note "+this.user.id+" is your login id");
      
    });
    this.router.navigate(["login"]);
  }

}
