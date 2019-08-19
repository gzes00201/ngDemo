import { Injectable } from '@angular/core';
import { Observable, Operator, ReplaySubject } from 'rxjs';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private langList = ['en', 'zh-tw'];

  constructor(private translateService: TranslateService,private http: HttpClient) {}

  setInitState() {
    this.translateService.addLangs(this.langList);
    // 根據使用者的瀏覽器語言設定，如果是中文就顯示中文，否則都顯示英文
    // 繁體/簡體中文代碼都是zh
    const browserLang = window.localStorage.getItem('chart') && localStorage.getItem('chart') === 'zh-tw' ? 'zh-tw' : 'en'  ;
    this.setLang(browserLang);
    console.log(this.translateService);
    // this.translateService.setTranslation('zh-tw', new TranslateHttpLoader(this.http, './assets/i18n/game/', 'zh-tw.json'));
  }

  setLang(lang: string) {
    this.translateService.use(lang);
  }
}
