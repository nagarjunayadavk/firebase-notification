import { Component } from '@angular/core';
import { MessagingService } from "./shared/messaging.service";
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-notification';
  message;

  constructor(private messagingService: MessagingService, public afAuth: AngularFireAuth) { }

  ngOnInit() {
    const userId = 'sZLmTLvquyVllYJA0Msw';
    
    this.messagingService.requestPermission(userId)
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}