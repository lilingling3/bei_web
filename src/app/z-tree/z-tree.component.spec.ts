import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZtreeDemoComponent } from './z-tree.component';

describe('ZTreeComponent', () => {
  let component: ZtreeDemoComponent;
  let fixture: ComponentFixture<ZtreeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZtreeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZtreeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
