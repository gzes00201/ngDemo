import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStatus]'
})
export class StatusDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
