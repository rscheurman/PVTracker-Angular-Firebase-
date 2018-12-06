import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { formatDate } from "@angular/common";
import { Jump } from "../forms/add-jumps/jump.model";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { MatSnackBar } from "@angular/material";

@Injectable({ providedIn: "root" })
export class JumpService {
  jumpDate: string;
  jumpCollection: AngularFirestoreCollection<Jump>;
  jump: Observable<Jump>;

  constructor(
    public afs: AngularFirestore,
    public authService: AuthService,
    public snackBar: MatSnackBar
  ) {
    // Get date
    this.jumpDate = formatDate(new Date(), "MM.dd.yyyy", "en");
    // End get get date
  }

  addJump(jump: Jump) {
    this.jumpCollection = this.afs
      .collection("users")
      .doc(this.authService.uid)
      .collection("jumps");

    // Add Date to Jump
    jump.jumpDay = this.jumpDate;

    this.jumpCollection
      .add(jump)
      .then(result => {
        console.log("Jump Uploaded");
        this.snackBar.open("Jump Uploaded");
      })
      .catch(err => {
        console.log(err);
        this.snackBar.open("Jump Failed To Upload " + err);
      });
  }
}
