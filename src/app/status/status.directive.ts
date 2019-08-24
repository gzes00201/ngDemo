import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStatusHost]'
})
export class StatusDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
