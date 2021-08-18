import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommentService } from '../services/comment.service';
import { Comment } from '../models/Comment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentEditComponent } from '../comment-edit/comment-edit.component';
import {
  faInfo,
  faEdit,
  faTrash,
  faList,
  faArrowDown,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { User } from '../models/User';

@Component({
  selector: 'app-comments-by-task',
  templateUrl: './comments-by-task.component.html',
  styleUrls: ['./comments-by-task.component.css']
})
export class CommentsByTaskComponent implements OnInit {
  faInfo = faInfo;
  faEdit = faEdit;
  faTrash = faTrash;
  faList = faList;
  faArrowDown = faArrowDown;
  faPlusCircle = faPlusCircle;

  show = 3;

  taskId!: number;
  comments: Array<Comment>;
  currentUser!: User;

  constructor(
    private commentService: CommentService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
  ) {
    this.comments = new Array<Comment>();

    this.authService.getCurrentUser().subscribe(res => {
      this.currentUser = res;
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.route.params.subscribe(res => {
      this.taskId = res['id'];
      this.commentService.getCommentsByTask(this.taskId).subscribe(res => {
        this.comments = res;
      });
    });
  }

  open() {
    const modalRef = this.modalService.open(CommentEditComponent);
  }

  editComment(id: number) {
    this.router.navigate([`comments/${id}/edit`]);
  }

  deleteComment(id: number) {
    this.commentService.deleteComment(id).subscribe(res => {
      this.fetchData();
    });
  }

  confirmDelete(id: number) {
    if (confirm(`Delete comment?`)) {
      this.deleteComment(id);
    }
  }

}
