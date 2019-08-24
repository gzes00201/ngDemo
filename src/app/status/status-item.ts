import { Type } from '@angular/core';
import { IStatusItem } from './istatus-item';

export class StatusItem {
  constructor(public component: Type<any>, public data: IStatusItem) {}
}
