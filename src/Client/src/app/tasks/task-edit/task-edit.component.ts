import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../models/Task';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  id!: number;
  task!: Task;
  taskForm!: FormGroup;
  currentUser!: User;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.authService.getCurrentUser().subscribe(res => {
      this.currentUser = res;
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.id = res['id'];
      this.taskService.getTaskDetails(this.id).subscribe(res => {
        this.task = res;
        this.verifyOwner();

        this.taskForm = this.fb.group({
          'Title': [this.task.title, Validators.required],
          'Description': [this.task.description, Validators.required],
          'Status': [this.task.status, Validators.required],
          'Id': [this.task.id],
        });
      });
    });
  }

  verifyOwner() {
    if (this.currentUser.id != this.task.userId) {
      this.router.navigate([`/tasks/${this.task.id}`]);
    }
  }

  editTask() {
    this.taskService.editTask(this.taskForm.value).subscribe(res => {
      this.router.navigate([`/tasks/${this.task.id}`]);
    });
  }

  confirmEdit() {
    if (confirm("Save changes to this task?")) {
      this.editTask();
    }
  }

  get title() {
    return this.taskForm.get('Title');
  }

  get description() {
    return this.taskForm.get('Description');
  }

}
