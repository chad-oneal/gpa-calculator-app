/*
============================================
; Title: main.ts for gpa-calculator-app
; Author: Chad ONeal
; Date: 02/09/2023
; Description: main.ts gpa-calculator-app
============================================
*/

// import statetments
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// if statement
if (environment.production) {
  enableProdMode();
}

// dynamic content
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
