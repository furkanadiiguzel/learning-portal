import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../app/pages/login/login.component';
import { SignupComponent } from '../app/pages/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from '../app/pages/admin/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UserDashboardComponent } from '../app/pages/user/user-dashboard/user-dashboard.component';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from '../app/pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { ProfileComponent } from '../app/pages/profile/profile.component';
import { ViewCategorysComponent } from '../app/pages/admin/view-categorys/view-categorys.component';
import { ViewQuizzesComponent } from '../app/pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizzesComponent } from '../app/pages/admin/add-quizzes/add-quizzes.component';
import { UpdateQuizComponent } from '../app/pages/admin/update-quiz/update-quiz.component';
import { AddQuestionComponent } from '../app/pages/admin/add-question/add-question.component';
import { ViewQuestionComponent } from '../app/pages/admin/view-question/view-question.component';
import { AddCategorysComponent } from '../app/pages/admin/add-categorys/add-categorys.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'; // Import MatSelectModule
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoadQuizComponent } from '../app/pages/user/load-quiz/load-quiz.component';
import { PrestartQuizComponent } from '../app/pages/user/prestart-quiz/prestart-quiz.component';
import { StartQuizComponent } from '../app/pages/user/start-quiz/start-quiz.component';
import { SidebarComponent } from '../app/pages/admin/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    NavbarComponent,
    UserDashboardComponent,
    HomeComponent,
    SidebarComponent,
    ProfileComponent,
    ViewCategorysComponent,
    ViewQuizzesComponent,
    AddQuizzesComponent,
    UpdateQuizComponent,
    AddQuestionComponent,
    ViewQuestionComponent,
    AddCategorysComponent,
    LoadQuizComponent,
    PrestartQuizComponent,
    StartQuizComponent,
    SidebarComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
