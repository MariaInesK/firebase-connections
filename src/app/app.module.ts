import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import firebase enviroment

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { credentials } from './credentials';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule, 
    AngularFireModule.initializeApp(credentials.firebase),
    //was AngularFireModule.initializeApp(environment, credentials.firebase),
    AngularFirestoreModule ],
  providers:[{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  
})
export class AppModule {}

//I need more code for injection? ...ionicModule.forRoot it is the name in firebase?
//provide: ErrorHandler, useClass: IonicErrorHandler

export const firebaseConfig = {

  apiKey: "AIzaSyD4UJuemZGsWpvoa2uhEkuE5DsjgoAn858",
    authDomain: "mariainesapp.firebaseapp.com",
    databaseURL: "https://mariainesapp-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mariainesapp",
    storageBucket: "mariainesapp.appspot.com",
    messagingSenderId: "802195512496",
    appId: "1:802195512496:web:dc0667882d3b2531b92f75"

};