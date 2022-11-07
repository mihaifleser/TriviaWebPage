import { Component } from '@angular/core';
import {IQuestion} from "./model/Question.component";
import {QuestionService} from "./services/Question.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trivia';
  loading = false
  questions: IQuestion[] = []

  constructor(private questionService: QuestionService) {
  }

  getQuestions(nrQuestions: string){
    let nr = parseInt(nrQuestions)
    if(nr < 1 || nr > 100 || nrQuestions == ""){
      alert("Numarul trebuie sa fie intre 1 si 100!")
      return
    }
    this.loading = true

    this.questionService.getQuestions(nr).subscribe(data => {
      setTimeout(it => {
        this.questions = data
        this.questions.forEach(it => console.log(it.question))
        this.loading = false
      },2000)

    })
  }

  addItem(question: IQuestion){
    this.questions?.unshift(question)
  }
}
