import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRightComponent } from './show-right.component';

describe('ShowRightComponent', () => {
  let component: ShowRightComponent;
  let fixture: ComponentFixture<ShowRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
