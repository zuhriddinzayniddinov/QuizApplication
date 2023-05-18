import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { QuestionsComponent } from './questions/questions.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {MatSelectModule} from '@angular/material/select'
import { AuthService } from './auth.service';
import { AuthInterceptorService } from './auth-interceptor.service';
import { PlayComponent } from './play/play.component';
import { PlayQuizComponent } from './play-quiz/play-quiz.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import { ScoreDialogComponent } from './score-dialog/score-dialog.component';
import { HomeQuizzesComponent } from './home-quizzes/home-quizzes.component';

let routes = [
  {path: 'question', component :QuestionComponent},
  {path: 'homequizzes', component :HomeQuizzesComponent},
  {path: 'question/:quizid', component :QuestionComponent},
  {path: 'questions',component : QuestionsComponent},
  {path: 'quiz',component : QuizComponent},
  {path: 'register', component :RegisterComponent},
  {path: 'login', component :LoginComponent},
  {path: 'play',component : PlayComponent},
  {path: 'playquiz/:quizid',component : PlayQuizComponent},
  {path: '',component:HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    HomeComponent,
    NavbarComponent,
    QuizComponent,
    QuizzesComponent,
    RegisterComponent,
    LoginComponent,
    PlayComponent,
    PlayQuizComponent,
    HomeQuizzesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatExpansionModule,
    MatChipsModule,
    MatRadioModule,
    MatDialogModule
  ],
  providers: [ApiService,AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
