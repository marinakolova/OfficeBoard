import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../models/Task';
import { AuthService } from '../services/auth.service';
import { TaskService } from '../services/task.service';
import { map, mergeMap } from 'rxjs/operators';
import {   
  faEdit,
  faTrash, 
  faTasks,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  faTasks = faTasks;

  id!: number;
  task!: Task;

  constructor(
    private taskService: TaskService, 
    private authService: AuthService, 
    private route: ActivatedRoute, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.route.params.pipe(map(params => {
      const id = params['id'];
      return id
    }), mergeMap(id => this.taskService.getTaskDetails(id))).subscribe(res => {
      this.task = res;
    });
  }

  getUserId() {
    return this.authService.getUserId();
  }

  editTask(id: number) {
    this.router.navigate([`tasks/${id}/edit`]);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(res => {
      this.router.navigate(["tasks"])
    });
  }

  confirmDelete(name: string, id: number) {
    if(confirm(`${name} - Delete this task?`)) {
      this.deleteTask(id);
    }
  }

}
