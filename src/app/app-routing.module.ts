import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/pages/login/login.component';
import { SignupComponent } from '../app/pages/signup/signup.component';
import { DashboardComponent } from '../app/pages/admin/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { UserDashboardComponent } from '../app/pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from '../app/pages/profile/profile.component';
import { WelcomeComponent } from '../app/pages/admin/welcome/welcome.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, pathMatch:'full'},
  {path: 'signup', component: SignupComponent, pathMatch:'full'},
  {path: 'admin', component: DashboardComponent, canActivate:[AuthGuard], children:[{path:'',component:WelcomeComponent},{path:'profile', component: ProfileComponent}]},
  {path: 'user-dashboard', component: UserDashboardComponent, pathMatch:'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
