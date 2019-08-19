import { TranslateLoader } from '@ngx-translate/core';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
// import { merge } from 'lodash';
import { HttpClient } from '@angular/common/http';

export interface ITranslationResource {
  prefix: string;
  suffix: string;
}

export class MultiTranslateHttpLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    private resources: ITranslationResource[]) {

    }

  public getTranslation(lang: string): Observable < any > {
    const requests = this.resources.map(resource => {
      const path = resource.prefix + lang + resource.suffix;
      console.log(path)
      return this.http.get(path).pipe(catchError(res => {
        console.error('Could not find translation file:', path);
        return of({});
      }));
    });
    return forkJoin(requests).pipe(map(response => {
      console.log(response)
      return Object.assign({}, ...response)
    }));
  }
}
