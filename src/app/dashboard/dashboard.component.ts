import { Component, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Jump } from "../forms/add-jumps/jump.model";
import { AuthService } from "../services/auth.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  panelOpenState = false;
  jumpsCollection: AngularFirestoreCollection<Jump>;
  jumps: Observable<Jump[]>;

  constructor(public afs: AngularFirestore, public authService: AuthService) {
    this.jumpsCollection = afs
      .collection("users")
      .doc(authService.uid)
      .collection<Jump>("jumps", ref => ref.orderBy("jumpDay", "desc"));

    this.jumps = this.jumpsCollection.valueChanges();
  }

  ngOnInit() {}

  changeLocation() {}
}
