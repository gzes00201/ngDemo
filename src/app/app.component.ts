import { Component, SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';
import { User, IUserPayload } from './user';
import { Observable } from 'rxjs';
import { StatusItem } from './status/status-item';
import { LuzeComponent } from './status/luze/luze.component';
import { ResultInfo } from './status/istatus-item';
import { DistributedComponent } from './status/distributed/distributed.component';

const mockData1: ResultInfo[] = [
  { num: '001', info: {  result: '01', text: '01', class: 'r', markClass: ''}},
  { num: '002', info: {  result: '02', text: '05', class: 'g', markClass: 'x'}},
  { num: '003', info: {  result: '04', text: '06', class: 'c', markClass: 'x'}},
];
const mockData2: ResultInfo[] = [
  { num: '001', info: {  result: 'b', text: 'b', class: 'r', markClass: ''}},
  { num: '002', info: {  result: 'c', text: 's', class: 'g', markClass: 'x'}},
  { num: '003', info: {  result: 'g', text: 'x', class: 'c', markClass: 'x'}},
];
const mockData3: ResultInfo[] = [
  { num: '001', info: {  result: 'c', text: 'v', class: 'r', markClass: ''}},
  { num: '002', info: {  result: 'e', text: 'd', class: 'g', markClass: 'x'}},
  { num: '003', info: {  result: 'v', text: 'd', class: 'c', markClass: 'x'}},
];
const mockData4: ResultInfo[] = [
  { num: '001', info: {  result: '1', text: 's', class: 'r', markClass: ''}},
  { num: '002', info: {  result: 'f', text: 'x', class: 'g', markClass: 'x'}},
  { num: '003', info: {  result: 'v', text: 'c', class: 'c', markClass: 'x'}},
];
const data2: any = [{ id: 1, name: 'acd' }, { id: 2, name: 'b' }, { id: 3, name: 'c' }, { id: 4, name: 'gggg' }];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  status: StatusItem[] = [
    new StatusItem(LuzeComponent, {title: '雙面', resulted: mockData1}),
    new StatusItem(LuzeComponent, {title: '大小', resulted: mockData2}),
    new StatusItem(LuzeComponent,   {title: '單雙', resulted: mockData3}),
    new StatusItem(LuzeComponent,   {title: '二字', resulted: mockData4}),
    new StatusItem(DistributedComponent,   {title: '分析'}),
  ];


  constructor() {
  }

}
