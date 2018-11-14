import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MePage } from '../pages/me/me';
import { PlusPage } from '../pages/plus/plus';
import { AddPage } from '../pages/add/add';
import { LoginPage } from '../pages/login/login';
import { SetPage } from '../pages/set/set';
import { EntryPage } from '../pages/entry/entry';
import { GosearchPage } from '../pages/gosearch/gosearch';
import { DetailsPage } from '../pages/details/details';
import { OrderPage } from '../pages/order/order';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MePage,
    PlusPage,
    AddPage,
    LoginPage,
    SetPage,
    EntryPage,
    GosearchPage,
    DetailsPage,
    OrderPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      tabsHideOnSubPages:true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MePage,
    PlusPage,
    AddPage,
    LoginPage,
    SetPage,
    EntryPage,
    GosearchPage,
    DetailsPage,
    OrderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
