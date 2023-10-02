import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WelcomeComponent } from './components/admin/welcome/welcome.component';

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
