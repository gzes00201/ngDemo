import { StatusDirective } from './status.directive';
import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-status',
  template: 'spy',
})
class SpyComponent {}

describe('StatusItemDirective', () => {
  fit('should create an instance', () => {
    TestBed.configureTestingModule({
      declarations: [SpyComponent],
      providers: [ComponentFactoryResolver]
    })
    .compileComponents();
    const fixture = TestBed.createComponent(SpyComponent);

    const directive = new StatusDirective(fixture.debugElement.componentInstance);
    expect(directive).toBeTruthy();
  });
});
