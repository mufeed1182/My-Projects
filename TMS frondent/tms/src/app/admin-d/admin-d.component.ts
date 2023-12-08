import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-d',
  templateUrl: './admin-d.component.html',
  styleUrls: ['./admin-d.component.css']
})
export class AdminDComponent implements OnInit {
  showHomePage:boolean=true;
  showUsersTable: boolean = false;
  showProjectPage:boolean=false;
  constructor(private ss:SignupService,private router:Router) { }

  ngOnInit(): void {
    // this.fetchHome();
    // this.fetchUsers();    
  }
  fetchUsers(): void {
    this.ss.getUsersByRole('user').subscribe(users => {
      // Assuming 'users' is an array of user data
      // Perform any necessary processing or display logic here
      this.showUsersTable = true;
      this.showHomePage=false;
      this.showProjectPage=false; // Show the user table component
    });
  }

  fetchHome():void{
    // this.showHomePage=true;
    // this.showUsersTable=false;
    // this.showProjectPage=false;
    this.router.navigate(['admind/home']);
  }

  fetchProjectPage():void{
    this.showHomePage=false;
    this.showUsersTable=false;
    this.showProjectPage=true;
  }
}
