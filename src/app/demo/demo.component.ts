import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss', '../../assets/demo.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
