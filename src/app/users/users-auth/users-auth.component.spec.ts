import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAuthComponent } from './users-auth.component';

describe('UsersAuthComponent', () => {
  let component: UsersAuthComponent;
  let fixture: ComponentFixture<UsersAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
