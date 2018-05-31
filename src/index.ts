// import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './App/App.module';

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.info(err));
