import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from './multi-translate-http-loader';
import { GlobComponent } from './glob/glob.component';

@NgModule({
  exports: [
    TranslateModule,
  ]
})
export class I18nModule { }
