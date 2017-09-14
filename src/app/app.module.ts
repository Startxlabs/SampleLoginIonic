
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FirstPage } from './../pages/first/first';
import { RegisterPage } from './../pages/register/register';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

const firebaseAuth = {
  apiKey: "AIzaSyDx1OEz2cBhaa2NG1pBGCwgN3rY-BVuUFA",
  authDomain: "demoapp-c700b.firebaseapp.com",
  databaseURL: "https://demoapp-c700b.firebaseio.com",
  projectId: "demoapp-c700b",
  storageBucket: "demoapp-c700b.appspot.com",
  messagingSenderId: "410020777054"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FirstPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FirstPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
