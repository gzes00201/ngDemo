import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { HomeComponent } from './home/home.component';
import { GlobComponent } from '../glob/glob.component';
import { ShareModule } from '../share.module';
import { I18nModule } from '../i18n.module';


@NgModule({
  declarations: [TestComponent, HomeComponent ],
  imports: [
    CommonModule,
    ShareModule,
    I18nModule,
    TestRoutingModule
  ]
})
export class TestModule { }
