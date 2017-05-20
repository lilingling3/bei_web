import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemRightComponent } from './system-right.component';

describe('SystemRightComponent', () => {
  let component: SystemRightComponent;
  let fixture: ComponentFixture<SystemRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
