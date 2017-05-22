import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRightComponent } from './edit-right.component';

describe('EditRightComponent', () => {
  let component: EditRightComponent;
  let fixture: ComponentFixture<EditRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
