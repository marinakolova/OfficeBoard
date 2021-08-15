import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesByUserComponent } from './messages-by-user.component';

describe('MessagesByUserComponent', () => {
  let component: MessagesByUserComponent;
  let fixture: ComponentFixture<MessagesByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
