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
import {MatCardModule} from '@angular/material/card';
import { WelcomeComponent } from './components/admin/welcome/welcome.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewCategorysComponent } from './components/admin/view-categorys/view-categorys.component';
import { ViewQuizzesComponent } from './components/admin/view-quizzes/view-quizzes.component';
import { AddQuizzesComponent } from './components/admin/add-quizzes/add-quizzes.component';
import { UpdateQuizComponent } from './components/admin/update-quiz/update-quiz.component';
import { AddQuestionComponent } from './components/admin/add-question/add-question.component';
import { ViewQuestionComponent } from './components/admin/view-question/view-question.component';
import { AddCategorysComponent } from './components/admin/add-categorys/add-categorys.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'; // Import MatSelectModule
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoadQuizComponent } from './components/user/load-quiz/load-quiz.component';
import { PrestartQuizComponent } from './components/user/prestart-quiz/prestart-quiz.component';
import { StartQuizComponent } from './components/user/start-quiz/start-quiz.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
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
    UserComponent,
    UserDashboardComponent,
    HomeComponent,
    SidebarComponent,
    WelcomeComponent,
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
