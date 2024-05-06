import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonInput, IonButton, IonImg, IonIcon, IonInputPasswordToggle, } from '@ionic/angular/standalone';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class SignupAndSigninComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLWFuZC1zaWduaW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9zaWdudXAtYW5kLXNpZ25pbi9zaWdudXAtYW5kLXNpZ25pbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NpZ251cC1hbmQtc2lnbmluL3NpZ251cC1hbmQtc2lnbmluLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFFBQVEsRUFDUixTQUFTLEVBQ1QsTUFBTSxFQUNOLE9BQU8sRUFDUCxzQkFBc0IsR0FDdkIsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBdUJuQyxNQUFNLE9BQU8sd0JBQXdCO0lBQzFCLE1BQU0sR0FBbUMsS0FBSyxFQUFFLElBQVcsRUFBRSxFQUFFO1FBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUM7SUFDRixRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLFNBQVMsR0FBRywyQkFBMkIsQ0FBQztJQUN4QyxTQUFTLEdBQUcsMEJBQTBCLENBQUM7SUFDdkMsSUFBSSxHQUFVO1FBQ1osUUFBUSxFQUFFLEVBQUU7UUFDWixLQUFLLEVBQUUsRUFBRTtRQUNULFFBQVEsRUFBRSxFQUFFO0tBQ2IsQ0FBQztJQUNGLGdCQUFlLENBQUM7SUFFaEIsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDVixRQUFRLEVBQUUsRUFBRTtZQUNaLEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO0lBQ0osQ0FBQztJQUVELEtBQUssQ0FBQyxhQUFhO1FBQ2pCLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzt1R0ExQlUsd0JBQXdCOzJGQUF4Qix3QkFBd0Isa0hDaENyQywrbUNBcUNBLDQ2QkRkSSxPQUFPLDJKQUNQLE1BQU0sNEVBQ04sU0FBUyxvUEFDVCxRQUFRLDhlQUNSLFVBQVUsd0tBQ1Ysc0JBQXNCLHdIQUN0QixXQUFXOzsyRkFHRix3QkFBd0I7a0JBZnBDLFNBQVM7K0JBQ0UsMEJBQTBCLGNBR3hCLElBQUksV0FDUDt3QkFDUCxPQUFPO3dCQUNQLE1BQU07d0JBQ04sU0FBUzt3QkFDVCxRQUFRO3dCQUNSLFVBQVU7d0JBQ1Ysc0JBQXNCO3dCQUN0QixXQUFXO3FCQUNaO3dEQUdRLE1BQU07c0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgSW9uQ29udGVudCxcbiAgSW9uSW5wdXQsXG4gIElvbkJ1dHRvbixcbiAgSW9uSW1nLFxuICBJb25JY29uLFxuICBJb25JbnB1dFBhc3N3b3JkVG9nZ2xlLFxufSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJztcblxuZXhwb3J0IGludGVyZmFjZSBJVXNlciB7XG4gIHVzZXJuYW1lPzogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtemttbmstc2lnbnVwLWFuZC1zaWduaW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbnVwLWFuZC1zaWduaW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWdudXAtYW5kLXNpZ25pbi5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgSW9uSWNvbixcbiAgICBJb25JbWcsXG4gICAgSW9uQnV0dG9uLFxuICAgIElvbklucHV0LFxuICAgIElvbkNvbnRlbnQsXG4gICAgSW9uSW5wdXRQYXNzd29yZFRvZ2dsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwQW5kU2lnbmluQ29tcG9uZW50IHtcbiAgQElucHV0KCkgc3VibWl0OiAodXNlcjogSVVzZXIpID0+IFByb21pc2U8dm9pZD4gPSBhc3luYyAodXNlcjogSVVzZXIpID0+IHtcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICBjb25zb2xlLmxvZygnc3VibWl0Jyk7XG4gIH07XG4gIGlzU2lnbmluID0gdHJ1ZTtcbiAgc2lnbmluSW1nID0gJy9hc3NldHMvbXprbW5rL3NpZ25pbi5wbmcnO1xuICBzaWdudXBJbWcgPSAnYXNzZXRzL216a21uay9zaWdudXAucG5nJztcbiAgdXNlcjogSVVzZXIgPSB7XG4gICAgdXNlcm5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gIH07XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBvblNpZ251cCgpIHtcbiAgICB0aGlzLmlzU2lnbmluID0gIXRoaXMuaXNTaWduaW47XG4gICAgdGhpcy51c2VyID0ge1xuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBvbkNsaWNrU3VibWl0KCkge1xuICAgIGF3YWl0IHRoaXMuc3VibWl0KHRoaXMudXNlcik7XG4gIH1cbn1cbiIsIjxpb24tY29udGVudD5cbiAgPGlvbi1pbWcgW3NyY109XCJpc1NpZ25pbiA/IHNpZ25pbkltZyA6IHNpZ251cEltZ1wiIC8+XG4gIDxwIGNsYXNzPVwidGl0bGUtc3R5bGVcIj57eyBpc1NpZ25pbiA/IFwiU2lnbkluXCIgOiBcIlNpZ25VcFwiIH19PC9wPlxuICA8Zm9ybT5cbiAgICA8aW9uLWlucHV0XG4gICAgICBmaWxsPVwib3V0bGluZVwiXG4gICAgICBtb2RlPVwibWRcIlxuICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgIFsobmdNb2RlbCldPVwidXNlci5lbWFpbFwiXG4gICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgPjxpb24taWNvbiBzbG90PVwic3RhcnRcIiBzcmM9XCJhc3NldHMvbXprbW5rL21haWwuc3ZnXCI+PC9pb24taWNvblxuICAgID48L2lvbi1pbnB1dD5cbiAgICA8aW9uLWlucHV0XG4gICAgICBmaWxsPVwib3V0bGluZVwiXG4gICAgICBtb2RlPVwibWRcIlxuICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgIFsobmdNb2RlbCldPVwidXNlci5wYXNzd29yZFwiXG4gICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgPjxpb24taWNvbiBzbG90PVwic3RhcnRcIiBzcmM9XCJhc3NldC9zbXprbW5rL2tleS5zdmdcIj48L2lvbi1pY29uPlxuICAgICAgPGlvbi1pbnB1dC1wYXNzd29yZC10b2dnbGVcbiAgICAgICAgc2xvdD1cImVuZFwiXG4gICAgICAgIGNvbG9yPVwiZGFya1wiXG4gICAgICA+PC9pb24taW5wdXQtcGFzc3dvcmQtdG9nZ2xlPlxuICAgIDwvaW9uLWlucHV0PlxuICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJvbkNsaWNrU3VibWl0KClcIj57e1xuICAgICAgaXNTaWduaW4gPyBcIlNpZ25pblwiIDogXCJDb250aW51ZVwiXG4gICAgfX08L2lvbi1idXR0b24+XG4gIDwvZm9ybT5cbiAgPGRpdj5cbiAgICA8cD4mbmJzcDsmbmJzcDtkb24ndCBoYXZlIGFuIGFjY291bnQ/Jm5ic3A7Jm5ic3A7PC9wPlxuICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJvblNpZ251cCgpXCI+e3tcbiAgICAgIGlzU2lnbmluID8gXCJHbyBTaWduVXBcIiA6IFwiR28gU2lnbkluXCJcbiAgICB9fTwvaW9uLWJ1dHRvbj5cbiAgPC9kaXY+XG48L2lvbi1jb250ZW50PlxuIl19