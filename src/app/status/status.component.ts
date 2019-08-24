import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { StatusItem } from './status-item';
import { StatusDirective } from './status.directive';
import { IStatusItemComponent } from './istatus-item';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  @Input() statusList: StatusItem[];
  @ViewChild(StatusDirective, {static: true}) appStatus: StatusDirective;

  currentIndex: number;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.currentIndex = 0;
   }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const item = this.statusList[this.currentIndex];

    if (!item) {
      return;
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
    const viewContainerRef = this.appStatus.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    (<IStatusItemComponent> componentRef.instance).resulted = item.data.resulted;
  }

  changeItem(index) {
    this.currentIndex = index;
    this.loadComponent();
  }
}
