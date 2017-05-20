import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemDictionaryComponent } from './system-dictionary.component';

describe('SystemDictionaryComponent', () => {
  let component: SystemDictionaryComponent;
  let fixture: ComponentFixture<SystemDictionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemDictionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
