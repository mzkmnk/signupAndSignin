import { Component, ViewChild, inject } from '@angular/core';
import {
  IonContent,
  IonInput,
  IonButton,
  IonImg,
  IonIcon,
} from '@ionic/angular/standalone';
import type { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

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
  providers: [AnimationController],
  imports: [IonIcon, IonImg, IonButton, IonInput, IonContent],
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
  private animationCtrl = inject(AnimationController);
  private animation: Animation | null = null;
  constructor() {
    // this.animation = this.animationCtrl.create().addElement;
  }

  onSignup() {
    this.isSignin = !this.isSignin;
    this.user = {
      username: '',
      email: '',
      password: '',
    };
  }
}
