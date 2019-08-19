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

// AoT requires an exported function for factories
// export function HttpLoaderFactory(http: HttpClient) {
//   return new MultiTranslateHttpLoader(http, [
//       {prefix: './assets/i18n/', suffix: '.json'},
//       {prefix: './assets/i18n/game/', suffix: '.json'},
//   ]);
// }

// AoT requires an exported function for factories
// 建立TranslateHttpLoader作為語系檔的讀取器
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }

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
    // TranslateModule.forRoot({
    //     loader: {
    //         provide: TranslateLoader,
    //         useFactory: HttpLoaderFactory,
    //         deps: [HttpClient]
    //     }
    // }),
    I18nModule,
    ShareModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
