import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuzeComponent } from './luze.component';

describe('LuzeComponent', () => {
  let component: LuzeComponent;
  let fixture: ComponentFixture<LuzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
