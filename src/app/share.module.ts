import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MultiTranslateHttpLoader } from './multi-translate-http-loader';

function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
      {prefix: './assets/i18n/', suffix: '.json'},
      {prefix: './assets/i18n/game/', suffix: '.json'},
  ]);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    TranslateModule
  ]
})
export class ShareModule { }
