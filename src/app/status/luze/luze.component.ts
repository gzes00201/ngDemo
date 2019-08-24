import { Component, OnInit, OnDestroy } from '@angular/core';
import { IStatusItemComponent, ResultInfo } from '../istatus-item';

@Component({
  selector: 'app-luze',
  templateUrl: './luze.component.html',
  styleUrls: ['./luze.component.scss']
})
export class LuzeComponent implements OnInit, OnDestroy, IStatusItemComponent  {

  resulted: ResultInfo[];

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
