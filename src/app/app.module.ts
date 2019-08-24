import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestModule } from './test/test.module';
import { DemoModule } from './demo/demo.module';
import { RouterModule } from '@angular/router';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { MultiTranslateHttpLoader } from './multi-translate-http-loader';
import { ShareModule } from './share.module';
import { I18nModule } from './i18n.module';
import { GlobComponent } from './glob/glob.component';
import { I18nLorder } from './i18nLorder';
import { StatusComponent } from './status/status.component';
import { StatusDirective } from './status/status.directive';
import { LuzeComponent } from './status/luze/luze.component';
import { DistributedComponent } from './status/distributed/distributed.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    StatusDirective,
    LuzeComponent,
    DistributedComponent,
    // GlobComponent,
    // TestComponent
  ],
  entryComponents: [LuzeComponent,DistributedComponent],
  exports: [
    // GlobComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot(I18nLorder),
    // I18nModule,
    ShareModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
