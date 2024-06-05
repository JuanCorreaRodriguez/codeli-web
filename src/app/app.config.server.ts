import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {translateServerLoaderFactory} from "./loaders/translate-server.loader";

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: translateServerLoaderFactory,
        deps: [HttpClient]
      }
    }).providers!
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
