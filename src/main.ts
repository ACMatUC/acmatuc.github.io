import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app/';
import { AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS, HTTP_PROVIDERS]);

