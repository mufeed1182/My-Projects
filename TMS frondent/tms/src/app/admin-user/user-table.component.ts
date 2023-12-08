import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  users: User[] = [];
  constructor(private ss:SignupService,private router:Router,private us:UserService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.ss.getUsersByRole('user').subscribe(
      users => {
        // Modify the IDs to start from 1 and increment sequentially
        this.users = users.map((user, index) => ({
          ...user,
          id: index + 1
        }));
      },
    );
  }

  assignProjetToUser(uid:number){
    
  }

  sendUid(uid:number) { // Replace with your UID
    this.us.changeUid(uid);
    this.router.navigate(['admind/projects',{ fromUser: true }]);
  }

  // navigateToTask(pid:number,pname:string): void {
  //   this.router.navigate(['admind/tasks',pid,pname]);
  //   this.ShowProjectPage=false;
  //   console.log("Navigating to tasks")
  //   // this.router.navigate(['admind/tasks']);
    
  // }
}
