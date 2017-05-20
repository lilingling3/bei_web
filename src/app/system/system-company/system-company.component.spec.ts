import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemCompanyComponent } from './system-company.component';

describe('SystemCompanyComponent', () => {
  let component: SystemCompanyComponent;
  let fixture: ComponentFixture<SystemCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
