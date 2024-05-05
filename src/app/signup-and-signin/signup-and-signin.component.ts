import { Component } from '@angular/core';
import {
  IonContent,
  IonInput,
  IonButton,
  IonImg,
  IonIcon,
  IonInputPasswordToggle,
} from '@ionic/angular/standalone';

export interface IUser {
  username?: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-signup-and-signin',
  templateUrl: './signup-and-signin.component.html',
  styleUrls: ['./signup-and-signin.component.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonImg,
    IonButton,
    IonInput,
    IonContent,
    IonInputPasswordToggle,
  ],
})
export class SignupAndSigninComponent {
  isSignin = true;
  signinImg = '../../assets/icon/signin.png';
  signupImg = '../../assets/icon/signup.png';
  user: IUser = {
    username: '',
    email: '',
    password: '',
  };
  constructor() {}

  onSignup() {
    this.isSignin = !this.isSignin;
    this.user = {
      username: '',
      email: '',
      password: '',
    };
  }
}
