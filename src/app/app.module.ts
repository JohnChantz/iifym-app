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
import {LoginPage} from "../pages/login/login";
import {UserDataProvider} from '../providers/user-data/user-data';
import {AngularFireModule} from "angularfire2";
import {FIREBASE_CONFIG} from "./app.firebase.config";
import {AngularFireAuthModule} from "angularfire2/auth";
import {RegisterPage} from "../pages/register/register";
import {ProfilePage} from "../pages/profile/profile";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    BodystatsPage,
    MacrosPage,
    LoginPage,
    RegisterPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    BodystatsPage,
    MacrosPage,
    LoginPage,
    RegisterPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserDataProvider
  ]
})
export class AppModule {
}
