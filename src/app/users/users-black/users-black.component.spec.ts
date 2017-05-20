import { async, ComponentFixture, TestBed } from '@angular/core/testing';

//noinspection TypeScriptCheckImport
import { UsersBlackComponent } from './users-black.component';

describe('UsersAuthComponent', () => {
  let component: UsersBlackComponent;
  let fixture: ComponentFixture<UsersBlackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersBlackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
