import {join} from 'path';
import {Observable} from 'rxjs';
import {TranslateLoader} from '@ngx-translate/core';
import * as fs from 'fs';
import {environment} from '../../environments/environment';

export class TranslateServerLoader implements TranslateLoader {
  private prefix: string = 'i18n';
  private suffix: string = '.json';

  public getTranslation(lang: string): Observable<any> {
    const af = environment.production
      ? join(process.cwd(), 'browser', 'assets', this.prefix).toString()
      : join(
          process.cwd(),
          'dist',
          'functions',
          'browser',
          'assets',
          this.prefix
        ).toString();

    return new Observable((observer) => {
      /*const assetsFolder = join(
        process.cwd(),
        'dist',
        'functions',
        'browser',
        'assets',
        this.prefix
      );*/
      const jsonData = JSON.parse(
        fs.readFileSync(`${af}\\${lang}${this.suffix}`, 'utf8')
      );

      observer.next(jsonData);
      observer.complete();
    });
  }
}

export function translateServerLoaderFactory(): TranslateLoader {
  return new TranslateServerLoader();
}
