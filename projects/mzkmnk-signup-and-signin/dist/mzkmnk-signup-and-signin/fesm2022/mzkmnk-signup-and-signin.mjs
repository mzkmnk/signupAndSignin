import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { IonIcon, IonImg, IonButton, IonInput, IonContent, IonInputPasswordToggle } from '@ionic/angular/standalone';

class SignupAndSigninComponent {
    submit = async (user) => {
        console.log(user);
        console.log('submit');
    };
    isSignin = true;
    signinImg = '/assets/mzkmnk/signin.png';
    signupImg = 'assets/mzkmnk/signup.png';
    user = {
        username: '',
        email: '',
        password: '',
    };
    constructor() { }
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: SignupAndSigninComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.7", type: SignupAndSigninComponent, isStandalone: true, selector: "mzkmnk-signup-and-signin", inputs: { submit: "submit" }, ngImport: i0, template: "<ion-content>\n  <ion-img [src]=\"isSignin ? signinImg : signupImg\" />\n  <p class=\"title-style\">{{ isSignin ? \"SignIn\" : \"SignUp\" }}</p>\n  <form>\n    <ion-input\n      fill=\"outline\"\n      mode=\"md\"\n      shape=\"round\"\n      placeholder=\"Email\"\n      [(ngModel)]=\"user.email\"\n      name=\"email\"\n      ><ion-icon slot=\"start\" src=\"assets/mzkmnk/mail.svg\"></ion-icon\n    ></ion-input>\n    <ion-input\n      fill=\"outline\"\n      mode=\"md\"\n      shape=\"round\"\n      placeholder=\"Password\"\n      [(ngModel)]=\"user.password\"\n      name=\"password\"\n      ><ion-icon slot=\"start\" src=\"asset/smzkmnk/key.svg\"></ion-icon>\n      <ion-input-password-toggle\n        slot=\"end\"\n        color=\"dark\"\n      ></ion-input-password-toggle>\n    </ion-input>\n    <ion-button (click)=\"onClickSubmit()\">{{\n      isSignin ? \"Signin\" : \"Continue\"\n    }}</ion-button>\n  </form>\n  <div>\n    <p>&nbsp;&nbsp;don't have an account?&nbsp;&nbsp;</p>\n    <ion-button (click)=\"onSignup()\">{{\n      isSignin ? \"Go SignUp\" : \"Go SignIn\"\n    }}</ion-button>\n  </div>\n</ion-content>\n", styles: ["ion-content::part(scroll){padding-top:var(--ion-safe-area-top, 0)}ion-content ion-img{margin:auto;display:block;width:75%}ion-content .title-style{display:flex;justify-content:center;align-items:center;letter-spacing:4px;font-size:25px;font-weight:500}ion-content form{width:90%;margin:auto}ion-content form ion-input:first-child{margin-bottom:20px}ion-content form ion-input{--border-radius: 15px}ion-content form ion-button{margin-top:50px;width:100%;--background:#5E48E8;--background-activated: #5640e4;letter-spacing:2px}ion-content div{display:flex;justify-content:center;align-items:center;flex-direction:column}ion-content div ion-button{width:90%;letter-spacing:2px;--background:#000000;--background-activated: #000000}ion-content div p:before{content:\"-----------------\";letter-spacing:-.2rem}ion-content div p:after{content:\"-----------------\";letter-spacing:-.2rem}\n"], dependencies: [{ kind: "component", type: IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { kind: "component", type: IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { kind: "component", type: IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { kind: "component", type: IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "shape", "size", "spellcheck", "step", "type", "value"] }, { kind: "component", type: IonContent, selector: "ion-content", inputs: ["color", "fixedSlotPlacement", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { kind: "component", type: IonInputPasswordToggle, selector: "ion-input-password-toggle", inputs: ["color", "hideIcon", "mode", "showIcon"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: SignupAndSigninComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mzkmnk-signup-and-signin', standalone: true, imports: [
                        IonIcon,
                        IonImg,
                        IonButton,
                        IonInput,
                        IonContent,
                        IonInputPasswordToggle,
                        FormsModule,
                    ], template: "<ion-content>\n  <ion-img [src]=\"isSignin ? signinImg : signupImg\" />\n  <p class=\"title-style\">{{ isSignin ? \"SignIn\" : \"SignUp\" }}</p>\n  <form>\n    <ion-input\n      fill=\"outline\"\n      mode=\"md\"\n      shape=\"round\"\n      placeholder=\"Email\"\n      [(ngModel)]=\"user.email\"\n      name=\"email\"\n      ><ion-icon slot=\"start\" src=\"assets/mzkmnk/mail.svg\"></ion-icon\n    ></ion-input>\n    <ion-input\n      fill=\"outline\"\n      mode=\"md\"\n      shape=\"round\"\n      placeholder=\"Password\"\n      [(ngModel)]=\"user.password\"\n      name=\"password\"\n      ><ion-icon slot=\"start\" src=\"asset/smzkmnk/key.svg\"></ion-icon>\n      <ion-input-password-toggle\n        slot=\"end\"\n        color=\"dark\"\n      ></ion-input-password-toggle>\n    </ion-input>\n    <ion-button (click)=\"onClickSubmit()\">{{\n      isSignin ? \"Signin\" : \"Continue\"\n    }}</ion-button>\n  </form>\n  <div>\n    <p>&nbsp;&nbsp;don't have an account?&nbsp;&nbsp;</p>\n    <ion-button (click)=\"onSignup()\">{{\n      isSignin ? \"Go SignUp\" : \"Go SignIn\"\n    }}</ion-button>\n  </div>\n</ion-content>\n", styles: ["ion-content::part(scroll){padding-top:var(--ion-safe-area-top, 0)}ion-content ion-img{margin:auto;display:block;width:75%}ion-content .title-style{display:flex;justify-content:center;align-items:center;letter-spacing:4px;font-size:25px;font-weight:500}ion-content form{width:90%;margin:auto}ion-content form ion-input:first-child{margin-bottom:20px}ion-content form ion-input{--border-radius: 15px}ion-content form ion-button{margin-top:50px;width:100%;--background:#5E48E8;--background-activated: #5640e4;letter-spacing:2px}ion-content div{display:flex;justify-content:center;align-items:center;flex-direction:column}ion-content div ion-button{width:90%;letter-spacing:2px;--background:#000000;--background-activated: #000000}ion-content div p:before{content:\"-----------------\";letter-spacing:-.2rem}ion-content div p:after{content:\"-----------------\";letter-spacing:-.2rem}\n"] }]
        }], ctorParameters: () => [], propDecorators: { submit: [{
                type: Input
            }] } });

/*
 * Public API Surface of mzkmnk-calendar
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SignupAndSigninComponent };
//# sourceMappingURL=mzkmnk-signup-and-signin.mjs.map
