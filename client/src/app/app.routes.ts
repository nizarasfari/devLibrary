import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserComponent } from './user/user.component';
export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'admin', component: AdminPageComponent},
    {path: 'user', component: UserComponent}
   
];
