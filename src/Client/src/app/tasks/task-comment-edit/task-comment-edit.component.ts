import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from '../../models/Comment';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-task-comment-edit',
  templateUrl: './task-comment-edit.component.html',
  styleUrls: ['./task-comment-edit.component.css']
})
export class TaskCommentEditComponent implements OnInit {

  id!: number;
  comment!: Comment;
  commentForm!: FormGroup;
  currentUser!: User;

  constructor(
    private fb: FormBuilder,
    private commentService: CommentService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.authService.getCurrentUser().subscribe(res => {
      this.currentUser = res;
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.id = res['id'];
      this.commentService.getCommentDetails(this.id).subscribe(res => {
        this.comment = res;
        this.verifyOwner();

        this.commentForm = this.fb.group({
          'Content': [this.comment.content, Validators.required],
          'Id': [this.comment.id],
        });
      });
    });
  }

  verifyOwner() {
    if (this.currentUser.id != this.comment.userId) {
      this.router.navigate([`/tasks/${this.comment.taskId}`]);
    }
  }

  editComment() {
    this.commentService.editComment(this.commentForm.value).subscribe(res => {
      this.router.navigate([`/tasks/${this.comment.taskId}`]);
    });
  }

  confirmEdit() {
    if (confirm("Save changes to this comment?")) {
      this.editComment();
    }
  }

  get content() {
    return this.commentForm.get('Content');
  }

}
