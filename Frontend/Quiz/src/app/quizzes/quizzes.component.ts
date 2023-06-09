import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent {
  quizzes: any;

  constructor(public apiSvc: ApiService) {

  }

  ngOnInit() {
    this.apiSvc.getQuizzes().subscribe(result => {
      this.quizzes = result;
    });
    this.apiSvc.getNewQuiz().subscribe(newQuiz => {
      this.quizzes.push(newQuiz);
    });
  }
}
