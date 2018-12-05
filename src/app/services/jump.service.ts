import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { formatDate } from "@angular/common";
import { Jump } from "../forms/add-jumps/jump.model";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: "root" })
export class JumpService {
  jumpDate: string;
  jumpCollection: AngularFirestoreCollection<Jump>;
  jump: Observable<Jump>;

  constructor(public afs: AngularFirestore, public authService: AuthService) {
    // Get date
    this.jumpDate = formatDate(new Date(), "MM.dd.yyyy", "en");
    // End get get date
  }

  addJump(jump: Jump) {
    this.jumpCollection = this.afs
      .collection("users")
      .doc(this.authService.uid)
      .collection("jumpdays")
      .doc(this.jumpDate)
      .collection("jumps");

    this.jumpCollection
      .add(jump)
      .then(result => {
        console.log("Jump Uploaded");
      })
      .catch(err => {
        console.log(err);
      });
  }
}
