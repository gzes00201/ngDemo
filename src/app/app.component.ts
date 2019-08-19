import { Component, SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';
import { User, IUserPayload } from './user';
import { Observable } from 'rxjs';



const data2: any = [{ id: 1, name: 'acd' }, { id: 2, name: 'b' }, { id: 3, name: 'c' }, { id: 4, name: 'gggg' }];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'my-app';
  s = 'xxxx';

  heroes: any = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 3, name: 'c' }];
  user:User;

  constructor(private i18n: LanguageService) {
        // // this language will be used as a fallback when a translation isn't found in the current language
        // translate.setDefaultLang('en');
        //  // the lang to use, if the lang isn't available, it will use the current loader to get them
        // translate.use('en');
  }
  trackByHeroes(index: number, hero: any): number { return hero.id; }
  ngOnInit(): void {
    this.i18n.setInitState();
  }
  add() {
    this.heroes = data2;
    this.s += this.s;
    this.getUser().subscribe(data=>{
      console.log(data)
      this.user = data;
    })
  }

  getUser(): Observable<User> {
    return new Observable(subscriber => {
      const mockData: any = {
        name: 'ami',
        game: ['ggg','ccc', 'ddd']
      }
      subscriber.next(new User(mockData));
      subscriber.complete();
    });
  }

}
