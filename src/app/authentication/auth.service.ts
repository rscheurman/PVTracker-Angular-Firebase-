import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class AuthService {
	user: Observable<firebase.User>;
	authenticated: boolean = false;

	name: string;
	email: string;
	uid: string;

	constructor(private afa: AngularFireAuth, public afs: AngularFirestore) {
		this.afa.authState.subscribe((auth) => {
			if (auth != null) {
				this.user = afa.authState;
				this.authenticated = true;

				this.user.subscribe((user: firebase.User) => {
					this.addUserData(user.displayName, user.email, user.uid);
				});
			} else {
				this.user = null;
				this.authenticated = false;
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

	addUserData(name: string, email: string, uid: string) {
		this.afs.collection('users').doc(uid).set({
			name: name,
			email: email,
			uid: uid
		});
		console.log(name + " user's data was added");
	}
}
