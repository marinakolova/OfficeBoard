import { Component, OnInit } from '@angular/core';
import {
  faEdit,
  faTrash,
  faTasks,
  faPlusCircle,
  faInfo,
  faList,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { User } from '../../models/User';
import { Task } from '../../models/Task';
import { Comment } from '../../models/Comment';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from '../../services/task.service';
import { CommentService } from '../../services/comment.service';
import { map, mergeMap } from 'rxjs/operators';
import { TaskCommentCreateComponent } from '../task-comment-create/task-comment-create.component';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;
  faTasks = faTasks;
  faPlusCircle = faPlusCircle;
  faInfo = faInfo;
  faList = faList;
  faArrowDown = faArrowDown;

  id!: number;
  task!: Task;
  currentUser!: User;

  comments: Array<Comment>;
  show = 2;

  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private commentService: CommentService,
  ) {
    this.authService.getCurrentUser().subscribe(res => {
      this.currentUser = res;
    });

    this.comments = new Array<Comment>();
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.route.params.pipe(map(params => {
      const id = params['id'];
      localStorage.setItem('task', id);
      return id;
    }), mergeMap(id => this.taskService.getTaskDetails(id))).subscribe(res => {
      this.task = res;
      this.commentService.getCommentsByTask(this.task.id).subscribe(res => {
        this.comments = res;
      });
    });
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
    if (confirm(`${name} - Delete this task?`)) {
      this.deleteTask(id);
    }
  }

  open() {
    const modalRef = this.modalService.open(TaskCommentCreateComponent);
  }

  editComment(id: number) {
    this.router.navigate([`tasks/comments/${id}/edit`]);
  }

  deleteComment(id: number) {
    this.commentService.deleteComment(id).subscribe(res => {
      this.fetchData();
    });
  }

  confirmDeleteComment(id: number) {
    if (confirm(`Delete comment?`)) {
      this.deleteComment(id);
    }
  }

}
