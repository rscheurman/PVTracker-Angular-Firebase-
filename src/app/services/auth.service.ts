import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	user: Observable<firebase.User>;
	authenticated: boolean = false;

	// User Attributes
	userName: string;
	uid: string;
	email: string;

	constructor(private afa: AngularFireAuth) {
		this.afa.authState.subscribe((auth) => {
			if (auth != null) {
				this.user = afa.authState;
				this.authenticated = true;

				// Get User Info
				this.user.subscribe((user: firebase.User) => {
					this.userName = user.displayName;
					this.uid = user.uid;
					this.email = user.email;
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
		this.authenticated = false;
	}
}
