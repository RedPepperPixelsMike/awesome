import { RouterModule } from "@angular/router";
import { SignupComponent } from "./signup.component";
import { LogoutComponent } from "./logout.component";
import { SigninComponent } from "./signin.component";
var Auth_Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent },
];
export var authRouting = RouterModule.forChild(Auth_Routes);
