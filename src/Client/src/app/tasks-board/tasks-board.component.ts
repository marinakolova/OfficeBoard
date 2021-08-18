import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Task } from '../models/Task';
import { TaskService } from '../services/task.service';
import { 
  faArrowLeft,
  faInfo,
  faEdit,
  faTrash,
  faArrowRight, 
} from '@fortawesome/free-solid-svg-icons';
import { User } from '../models/User';

@Component({
  selector: 'app-tasks-board',
  templateUrl: './tasks-board.component.html',
  styleUrls: ['./tasks-board.component.css']
})
export class TasksBoardComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faInfo = faInfo;
  faEdit = faEdit;
  faTrash = faTrash;
  faArrowRight = faArrowRight;

  tasks: Array<Task>;
  currentUser!: User;

  constructor(
    private taskService: TaskService, 
    private authService: AuthService, 
    private router: Router
    ) {
    this.tasks = new Array<Task>();

    this.authService.getCurrentUser().subscribe(res => {
      this.currentUser = res;
    });
  }

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  editTask(id: number) {
    this.router.navigate([`tasks/${id}/edit`]);
  }

  changeStatus(id: number, status: number) {
    const data = {
      id: id,
      status: status,
    }
    this.taskService.changeStatus(data).subscribe(res => {
      this.fetchTasks();
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(res => {
      this.fetchTasks();
    });
  }

  confirmDelete(name: string, id: number) {
    if(confirm(`${name} - Delete task?`)) {
      this.deleteTask(id);
    }
  }

}
