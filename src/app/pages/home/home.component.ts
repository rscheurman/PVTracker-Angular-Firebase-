import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Message } from "src/app/models/message.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  homeMessages: Message[] = [
    {
      title: "Welcome back!",
      subtitle: "Start recording your jumps!",
      body:
        "The more you record, the more accurate we can predict and provide tips"
    }
  ];
  constructor(private fbAuth: AuthService) {}

  ngOnInit() {}
}
