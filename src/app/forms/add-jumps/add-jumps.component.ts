import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { Jump } from "./jump.model";
import { JumpService } from "src/app/services/jump.service";

@Component({
  selector: "app-add-jumps",
  templateUrl: "./add-jumps.component.html",
  styleUrls: ["./add-jumps.component.scss"]
})
export class AddJumpsComponent implements OnInit {
  @ViewChild("f") addJumpForm: NgForm;
  jumpData: Jump;

  PoleFeetLength = [10, 11, 12, 13, 14, 15, 16];
  PoleInchLength = [0, 5, 6, 7, 8];

  // Form Data
  value: string;
  veiwValue: string;

  constructor(public afs: AngularFirestore, public jumpService: JumpService) {}

  ngOnInit() {}

  onSubmit() {
    this.jumpData = this.addJumpForm.value;
    this.jumpService.addJump(this.jumpData);
    this.addJumpForm.reset();
  }
}
