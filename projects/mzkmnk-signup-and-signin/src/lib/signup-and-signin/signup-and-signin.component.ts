import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  selector: 'mzkmnk-signup-and-signin',
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
    FormsModule,
  ],
})
export class SignupAndSigninComponent {
  @Input() submit: (user: IUser) => Promise<void> = async (user: IUser) => {
    console.log(user);
    console.log('submit');
  };
  isSignin = true;
  signinImg = 'assets/mzkmnk/signin.png';
  signupImg = 'assets/mzkmnk/signup.png';
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

  async onClickSubmit() {
    await this.submit(this.user);
  }
}
