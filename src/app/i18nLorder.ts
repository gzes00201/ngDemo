import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from './multi-translate-http-loader';
import { TranslateLoader } from '@ngx-translate/core';

const i18NFiles = [
  './assets/i18n/',
  './assets/i18n/game/'
];

function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, i18NFiles.map(prefix => ({
    prefix,
    suffix: '.json'
  })));
}

export const I18nLorder = {
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient]
  }
};
