import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    var config = {
      apiKey: "AIzaSyD7PtuJf_yrMkMfUYsueQ-TA_sIcIKc5gE",
      authDomain: "bibliotheque-api.firebaseapp.com",
      databaseURL: "https://bibliotheque-api.firebaseio.com",
      projectId: "bibliotheque-api",
      storageBucket: "gs://bibliotheque-api.appspot.com",
      messagingSenderId: "658388583917"
    };
    firebase.initializeApp(config);
  }
}
