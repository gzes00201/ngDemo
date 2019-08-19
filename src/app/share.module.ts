import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MultiTranslateHttpLoader } from './multi-translate-http-loader';
import { GlobComponent } from './glob/glob.component';

function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
      {prefix: './assets/i18n/', suffix: '.json'},
      {prefix: './assets/i18n/game/', suffix: '.json'},
  ]);
}

@NgModule({
  declarations: [GlobComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GlobComponent
  ]
})
export class ShareModule { }
