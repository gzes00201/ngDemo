import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobComponent } from './glob.component';

describe('GlobComponent', () => {
  let component: GlobComponent;
  let fixture: ComponentFixture<GlobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
