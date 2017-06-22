import {RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "./signup.component";
import {LogoutComponent} from "./logout.component";
import {SigninComponent} from "./signin.component";
const Auth_Routes: Routes = [
    {path: '', redirectTo: 'signup', pathMatch: 'full'},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'logout', component: LogoutComponent},
];

export const authRouting = RouterModule.forChild(Auth_Routes);