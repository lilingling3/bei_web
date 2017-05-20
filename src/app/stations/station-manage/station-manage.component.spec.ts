import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationManageComponent } from './station-manage.component';

describe('StationManageComponent', () => {
  let component: StationManageComponent;
  let fixture: ComponentFixture<StationManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
