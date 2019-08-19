import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [TestComponent, HomeComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
