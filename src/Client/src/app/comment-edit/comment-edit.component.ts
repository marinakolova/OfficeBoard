import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { Comment } from '../models/Comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css']
})
export class CommentEditComponent implements OnInit {

  id!: number;
  comment!: Comment;
  commentForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private commentService: CommentService, 
    private route: ActivatedRoute,
    private router: Router
    ) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.id = res['id'];
      this.commentService.getCommentDetails(this.id).subscribe(res => {
        this.comment = res;

        this.commentForm = this.fb.group({
          'Content': [this.comment.content, Validators.required],
          'Id': [this.comment.id],
        });
      });
    });
  }

  editComment() {
    this.commentService.editComment(this.commentForm.value).subscribe(res => {
      this.router.navigate(["/comments"]);
    });
  }

  confirmEdit() {
    if(confirm("Save changes to this comment?")) {
      this.editComment();
    }
  }

  get content() {
    return this.commentForm.get('Content');
  }

}
