import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCommentEditComponent } from './task-comment-edit.component';

describe('TaskCommentEditComponent', () => {
  let component: TaskCommentEditComponent;
  let fixture: ComponentFixture<TaskCommentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCommentEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCommentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
