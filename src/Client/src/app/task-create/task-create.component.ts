import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  taskForm: FormGroup;
  
  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router) { 
    this.taskForm = this.fb.group({
      'Title': ['', Validators.required],
      'Description': ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  create() {
    this.taskService.create(this.taskForm.value).subscribe(res => {
      this.router.navigate(["/tasks"]);
    });
  }

  get title() {
    return this.taskForm.get('Title');
  }

  get description() {
    return this.taskForm.get('Description');
  }

}
