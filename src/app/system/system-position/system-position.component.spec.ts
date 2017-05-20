import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemPositionComponent } from './system-position.component';

describe('SystemPositionComponent', () => {
  let component: SystemPositionComponent;
  let fixture: ComponentFixture<SystemPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
