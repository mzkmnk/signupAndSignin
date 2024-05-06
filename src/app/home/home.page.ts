import { Component } from "@angular/core";
import { IonContent } from "@ionic/angular/standalone";
import { IUser, SignupAndSigninComponent } from "../signup-and-signin/signup-and-signin.component";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  standalone: true,
  imports: [IonContent, SignupAndSigninComponent],
})
export class HomePage {
  constructor() {}

  async submit(user:IUser){
    console.log(user);
  }
}
