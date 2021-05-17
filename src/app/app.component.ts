import { Component } from '@angular/core';
import firebase from 'firebase/app';
import { credentials } from './credentials';
import "firebase/auth";
import "firebase/firestore";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  initializeApp(){
    firebase.initializeApp(credentials);
  }
}


