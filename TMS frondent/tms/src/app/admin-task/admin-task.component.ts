import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-task',
  templateUrl: './admin-task.component.html',
  styleUrls: ['./admin-task.component.css']
})
export class AdminTaskComponent implements OnInit {
  pid!: number;
  pname!: string;
  taskForm: any;
  tasks: any[] = [];

  constructor(private route: ActivatedRoute, private ts: TaskService, private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      "id":[],
      "taskName": [''],
      "status": ['']
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pid = +params['pid'];
      this.pname = params['pname'];
      console.log(this.pid);
      console.log(this.pname);
      this.fetchtasks();
    });
  }

  fetchtasks(): void {
    this.ts.fetchTasksByProjectId(this.pid).subscribe((data) => {
      this.tasks = data.map((user, index) => ({
        ...user,
        id: index + 1
      }));
      // this.tasks = data;
    });
  }

  addTasksToProject() {
    var ar = this.taskForm.value;
    console.log("We are sending..");
    console.log(ar);
    this.ts.addTasksToProjects(this.pid, ar).subscribe(data => {
      console.log("We are Received..")
      console.log(data);
      // Optionally, you can update your tasks list after adding a new task
      this.fetchtasks();
    });
  }

  deleteTask(id:number){
    this.ts.deleteTaskById(id).subscribe((data)=>{
      console.log("deleting the data")
      console.log(data)

      this.fetchtasks();
    })

  }
}
