import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommentService } from '../services/comment.service';
import { Comment } from '../models/Comment';
import { 
  faInfo,
  faEdit,
  faTrash, 
  faList,
  faArrowDown,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';

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

  constructor(
    private commentService: CommentService, 
    private authService: AuthService, 
    private route: ActivatedRoute, 
    private router: Router
    ) { 
    this.comments = new Array<Comment>();
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

  getUserId() {
    return this.authService.getUserId();
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
    if(confirm(`Delete comment?`)) {
      this.deleteComment(id);
    }
  }

}
