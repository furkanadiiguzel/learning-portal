import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UserComponent } from './components/user/user.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import {MatCardModule} from '@angular/material/card';
import { WelcomeComponent } from './components/admin/welcome/welcome.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddCategorysComponent } from './components/admin/add-categorys/add-categorys.component';
import { AddQuestionComponent } from './components/admin/add-question/add-question.component';
import { AddQuizzesComponent } from './components/admin/add-quizzes/add-quizzes.component';
import { UpdateQuizComponent } from './components/admin/update-quiz/update-quiz.component';
import { ViewCategorysComponent } from './components/admin/view-categorys/view-categorys.component';
import { QuestionComponent } from './components/admin/question/question.component';
import { ViewQuestionComponent } from './components/admin/view-question/view-question.component';
import { ViewQuizComponent } from './components/admin/view-quiz/view-quiz.component';
import { ViewQuizzesComponent } from './components/admin/view-quizzes/view-quizzes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    NavbarComponent,
    UserComponent,
    UserDashboardComponent,
    HomeComponent,
    SidebarComponent,
    WelcomeComponent,
    ProfileComponent,
    AddCategorysComponent,
    AddQuestionComponent,
    AddQuizzesComponent,
    UpdateQuizComponent,
    ViewCategorysComponent,
    QuestionComponent,
    ViewQuestionComponent,
    ViewQuizComponent,
    ViewQuizzesComponent,

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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
