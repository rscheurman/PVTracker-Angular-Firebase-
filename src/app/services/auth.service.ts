import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { User } from './user.model';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	fbUser: Observable<firebase.User>;
	authenticated: boolean = false;

	userDoc: AngularFirestoreDocument<User>;
	user: Observable<User>;

	// User Attributes
	userName: string;
	uid: string;
	email: string;

	constructor(private afa: AngularFireAuth, public afs: AngularFirestore, public router: Router) {
		this.afa.authState.subscribe((auth) => {
			if (auth != null) {
				this.fbUser = afa.authState;
				this.authenticated = true;

				// Get User Info
				this.fbUser.subscribe((user: firebase.User) => {
					this.userName = user.displayName;
					this.uid = user.uid;
					this.email = user.email;
					this.updateUserData(this.userName, this.email, this.uid);
				});
			} else {
				this.authenticated = false;
				this.userName = 'Guest';
			}
		});
	}

	login() {
		this.afa.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
		this.authenticated = true;
	}
	logout() {
		this.afa.auth.signOut();
		this.router.navigate([ '/' ]);
		this.authenticated = false;
	}

	updateUserData(name: string, email: string, uid: string) {
		this.userDoc = this.afs.doc('users/' + uid);
		this.userDoc
			.set({
				name: name,
				email: email,
				uid: uid
			})
			.then((result) => {
				console.log(name + ' uploaded their user information' + result);
			})
			.catch((err) => {
				console.log(err);
			});
	}
}
