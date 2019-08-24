import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusComponent } from './status.component';
import { Component } from '@angular/core';
import { StatusItem } from './status-item';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { StatusDirective } from './status.directive';

@Component({
  selector: 'app-test1',
  template: 'Test1Component'
})
class Test1Component {}

@Component({
  selector: 'app-test2',
  template: 'Test2Component'
})
class Test2Component {}

const status: StatusItem[] = [
  new StatusItem(Test1Component, {title: 'test1', resulted: []}),
  new StatusItem(Test2Component, {title: 'test2', resulted: []}),
]

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusComponent, Test1Component, Test2Component, StatusDirective ]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ Test1Component, Test2Component ],
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
  });

  fit('should create', () => {
    component.statusList = [];
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  fit('可以創建 viewContainer', () => {
    // Arrange
    component.statusList = status;

    // Act
    fixture.detectChanges();

    // Assert
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.textContent).toContain('Test1Component');
  });

  fit('可以切換元件', () => {
    // Arrange
    component.statusList = status;
    fixture.detectChanges();

    // Act
    component.changeItem(1);

    expect(component.currentIndex).toBe(1);
    expect(fixture.nativeElement.textContent).toContain('Test2Component');
  });
});
