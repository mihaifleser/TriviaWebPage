import {Component, Input} from "@angular/core";
import {IQuestion} from "../../model/Question.component";

@Component({
  selector: 'app-question-item',
  templateUrl: './questionItem.component.html'
})

export class QuestionItemComponent{
  @Input() question?: IQuestion
}
