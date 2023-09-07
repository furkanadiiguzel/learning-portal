import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'videos', component: VideoListComponent },
  { path: 'video/:id', component: VideoPlayerComponent },
  { path: 'video/:id/pre-test', component: VideoTestComponent },
  { path: 'video/:id/post-test', component: VideoTestComponent },
  { path: 'unit-test/:id', component: UnitTestComponent },
  // Add more routes as needed
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
