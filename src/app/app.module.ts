import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from "../pages/home/home";
import {SettingsPage} from "../pages/settings/settings";
import {MacrosPage} from "../pages/macros/macros";
import {BodystatsPage} from "../pages/bodystats/bodystats";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    BodystatsPage,
    MacrosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    BodystatsPage,
    MacrosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
