import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileByUserComponent } from './profile-by-user.component';

describe('ProfileByUserComponent', () => {
  let component: ProfileByUserComponent;
  let fixture: ComponentFixture<ProfileByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
