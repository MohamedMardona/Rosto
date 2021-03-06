import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler,App } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {HttpModule} from '@angular/http';//import
import { CategoryPage } from '../pages/category/category';
import { ModalPage } from '../pages/modal/modal';
import { IonicStorageModule } from '@ionic/storage';
import { BranchesPage } from '../pages/branches/branches';
import { MapmodalPage } from '../pages/mapmodal/mapmodal';

import { OrderPage } from '../pages/order/order';
import { CallNumber } from '@ionic-native/call-number';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServicesProvider } from '../providers/services/services';
import { GoogleMaps } from '@ionic-native/google-maps';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

import { SuperTabsModule } from 'ionic2-super-tabs';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';


import { Diagnostic } from '@ionic-native/diagnostic';


import { OpenNativeSettings } from '@ionic-native/open-native-settings';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
       tabsHideOnSubPages: true,
       tabsPlacement: 'top',
       platforms: {
        ios: {
          tabsPlacement: 'bottom',
          mode: 'md',
        },
        android:
        {

        }
      }
      
      
      },
      ),
    IonicStorageModule.forRoot(),
    SuperTabsModule.forRoot(),

    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    NativeGeocoder,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesProvider,
    CallNumber,
    NativePageTransitions,
    Diagnostic,
    OpenNativeSettings
  ]
})
export class AppModule {}
