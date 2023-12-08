import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-project',
  templateUrl: './admin-project.component.html',
  styleUrls: ['./admin-project.component.css']
})
export class AdminProjectComponent implements OnInit {
  projectForm:any;
  projects: any[] = [];
  project:any;
  // navigateToTasksClicked = false;
  ShowProjectPage:boolean=true;
  receivedUid: number =0;
  // showTaskPage:boolean=false;
  fromUser = false;
  
  constructor(private fb:FormBuilder,private ps:ProjectService,private router:Router,
    private us:UserService,private route: ActivatedRoute) { 
    this.projectForm=this.fb.group({
      "id":[],
      "name":[],
      "description":[],
      "startingDate":[],
      "endingDate":[]
    })
  }

  ngOnInit(): void {
    this.fetchProjects();
    // this.navigateToTask();

    this.us.currentUid.subscribe((uid) => {
      this.receivedUid = uid;
    });

    this.fromUser = this.route.snapshot.paramMap.get('fromUser') === 'true';
  }

  fetchProjects(): void {
    this.ps.fetchProjects().subscribe((data) => {
      this.projects = data; // Update the projects property with fetched data
      // this.ShowProjectPage=true;
    });
  }
  navigateToTask(pid:number,pname:string): void {
    this.router.navigate(['admind/tasks',pid,pname]);
    this.ShowProjectPage=false;
    console.log("Navigating to tasks")
    // this.router.navigate(['admind/tasks']);
    
  }

  fnAddProject()
  {
    var usr=this.projectForm.value;
    console.log("We Are Sending ...");
    console.log(usr);
    this.ps.fnAddProject(usr).subscribe((data)=>{
      console.log("We are recieved..");
      console.log(data);
      // this.projects=data;
      // alert("Please note "+this.user.id+" is your login id");
      this.fetchProjects()
    });
  }

  fnDeleteProject(id:number){
    // var id=this.projectForm.id.value;
    // console.log(id);
    this.ps.fnDeleteProject(id).subscribe((data)=>{
      console.log("We are deleted");
      console.log(data);
      this.fetchProjects();
    })

  }

  fnAddProjectToTheUser(pid:number){
    this.us.addProjectToTheUser(this.receivedUid,pid).subscribe((data)=>{
      console.log('Project Added to the user')
      console.log(data)
    })
  }
}
