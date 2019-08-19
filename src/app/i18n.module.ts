import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from './multi-translate-http-loader';
import { GlobComponent } from './glob/glob.component';

const i18NFiles = [
  './assets/i18n/',
  './assets/i18n/game/'
]

function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, i18NFiles.map(prefix => ({
    prefix,
    suffix: '.json'
  })));
}

@NgModule({
  // declarations: [GlobComponent],
  imports: [
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
  ],
  exports: [
    TranslateModule,
    // GlobComponent
  ]
})
export class I18nModule { }
