// import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './App/App.module';

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(() => console.info('App launched'))
    .catch(err => console.info(err));
