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

@NgModule({
  declarations: [
    AppComponent,
    // GlobComponent,
    // TestComponent
  ],
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
