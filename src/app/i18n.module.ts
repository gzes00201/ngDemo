import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from './multi-translate-http-loader';

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
    TranslateModule
  ]
})
export class I18nModule { }
