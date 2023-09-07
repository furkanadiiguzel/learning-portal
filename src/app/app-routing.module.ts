import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { AppComponent } from './app.component';
import { NzDemoDrawerPlacementComponent } from './app.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to the home route
  { path: 'home', component: AppComponent }, // Route to the AppComponent
  { path: 'drawer', component: NzDemoDrawerPlacementComponent }, // Route to the NzDemoDrawerPlacementComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NzDrawerModule], // Import NzDrawerModule
  exports: [RouterModule],})
export class AppRoutingModule { }

