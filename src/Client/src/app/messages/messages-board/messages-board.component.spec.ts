import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesBoardComponent } from './messages-board.component';

describe('MessagesBoardComponent', () => {
  let component: MessagesBoardComponent;
  let fixture: ComponentFixture<MessagesBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
