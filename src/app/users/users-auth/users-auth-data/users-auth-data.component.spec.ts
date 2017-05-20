import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAuthDataComponent } from './users-auth-data.component';

describe('UsersAuthDataComponent', () => {
  let component: UsersAuthDataComponent;
  let fixture: ComponentFixture<UsersAuthDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAuthDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAuthDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
