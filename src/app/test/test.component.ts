import { Component, OnInit, SimpleChanges, OnChanges, Input, DoCheck, ViewEncapsulation  } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class TestComponent implements OnInit {
  @Input() text1: string;
  show = 'xx';
  constructor() { }

  ngOnInit() {

  }

  // ngDoCheck() {
  //   console.log('ngDoCheck')
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes, 'ngOnChanges');
  //   // for (const propName in changes) {
  //   //   const chng = changes[propName];
  //   //   const cur = JSON.stringify(chng.currentValue);
  //   //   const prev = JSON.stringify(chng.previousValue);
  //   //   this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
  //   // }
  // }

  dd(){
    this.show += 'xx';
  }
}
