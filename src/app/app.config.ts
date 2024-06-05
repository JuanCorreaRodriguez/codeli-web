import {ApplicationConfig, isDevMode} from '@angular/core';
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling,
  withViewTransitions
} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideServiceWorker} from '@angular/service-worker';
import {HttpClient, provideHttpClient, withFetch} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {IMAGE_CONFIG, IMAGE_LOADER, ImageLoaderConfig,} from "@angular/common";
import {TranslateBrowserLoader, translateBrowserLoaderFactory} from "./loaders/translate-browser.loader";
import {MAT_CHIPS_DEFAULT_OPTIONS} from "@angular/material/chips";
import {COMMA, SPACE} from "@angular/cdk/keycodes";
//
// {
//   provide: PRECONNECT_CHECK_BLOCKLIST,
//     useValue: [
//   'https://localhost:4200/assets/img',
// ]
// },
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};
const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions(), inMemoryScrollingFeature),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideServiceWorker('ngsw-worker.js', {
        enabled: true,
        registrationStrategy: 'registerWhenStable:30000'
    }),
    TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
            provide: TranslateLoader,
            useFactory: translateBrowserLoaderFactory,
            deps: [HttpClient]
        }
    }).providers!,
    provideAnimationsAsync(),
    {
        provide: IMAGE_CONFIG,
        useValue: { breakpoints: [380, 640, 1200] }
    },
    {
        provide: IMAGE_LOADER,
        useValue: (config: ImageLoaderConfig) => {
            return `assets/img/${config.width}/${config.src}?`;
        }
    },
    {
        provide: MAT_CHIPS_DEFAULT_OPTIONS,
        useValue: {
            separatorKeyCodes: [COMMA, SPACE]
        }
    },
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })
],
};
