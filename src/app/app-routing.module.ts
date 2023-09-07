import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), NzDrawerModule], // Import NzDrawerModule
  exports: [RouterModule],
})
export class AppRoutingModule { }

