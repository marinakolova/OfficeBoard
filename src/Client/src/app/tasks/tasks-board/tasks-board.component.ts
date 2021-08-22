import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {
  faArrowLeft,
  faInfo,
  faEdit,
  faTrash,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../models/Task';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';
import { TaskService } from '../../services/task.service';

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

  toDoTasks: Array<Task>;
  doingTasks: Array<Task>;
  doneTasks: Array<Task>;
  currentUser!: User;

  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private router: Router
  ) {
    this.toDoTasks = new Array<Task>();
    this.doingTasks = new Array<Task>();
    this.doneTasks = new Array<Task>();

    this.authService.getCurrentUser().subscribe(res => {
      this.currentUser = res;
    });
  }

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskService.getAllTasks().subscribe(tasks => {
      this.toDoTasks = tasks.filter(x => x.status == 0);
      this.doingTasks = tasks.filter(x => x.status == 1);
      this.doneTasks = tasks.filter(x => x.status == 2);
    });
  }

  editTask(id: number) {
    this.router.navigate([`tasks/${id}/edit`]);
  }

  drop(event: CdkDragDrop<Task[]>, status: number) {

    if (event.previousContainer !== event.container) {

      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex);
        this.changeStatus(Number(event.item.getRootElement().querySelector('#taskId')?.innerHTML), status);

    } else {
      moveItemInArray(this.toDoTasks, event.previousIndex, event.currentIndex);
    }
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
    if (confirm(`${name} - Delete task?`)) {
      this.deleteTask(id);
    }
  }

}
