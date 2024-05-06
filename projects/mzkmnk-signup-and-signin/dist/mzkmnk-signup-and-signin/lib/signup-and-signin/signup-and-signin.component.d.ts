import * as i0 from "@angular/core";
export interface IUser {
    username?: string;
    email: string;
    password: string;
}
export declare class SignupAndSigninComponent {
    submit: (user: IUser) => Promise<void>;
    isSignin: boolean;
    signinImg: string;
    signupImg: string;
    user: IUser;
    constructor();
    onSignup(): void;
    onClickSubmit(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SignupAndSigninComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SignupAndSigninComponent, "mzkmnk-signup-and-signin", never, { "submit": { "alias": "submit"; "required": false; }; }, {}, never, never, true, never>;
}
