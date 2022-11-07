import {Component, Input, Output, EventEmitter} from "@angular/core";
import {ICategory} from "../../model/Category.component";
import {IQuestion} from "../../model/Question.component";

@Component({
  selector: 'app-modal-item',
  templateUrl: './modalItem.component.html',
  styleUrls: ['./modalItem.component.css']
})

export class ModalItemComponent {
  visible: Boolean = false
  errorMsg = ""

  @Output() newItemEvent = new EventEmitter<IQuestion>();

  openModal() {
    this.visible = true
  }

  closeModal() {
    this.visible = false
  }

  addQuestion(question: string, answer: string, value: string, category: string) {
    let realValue = parseInt(value)
    let categories = ['Music', 'History', 'Geography', 'Famous']
    if (question.length < 10) {
      this.errorMsg = "Question Wrong > 10"
      return
    }
    if (answer.length < 5) {
      this.errorMsg = "Answer Wrong < 5"
      return
    }
    if (realValue < 50 || realValue > 150 || value == "") {
      this.errorMsg = "Value Wrong 50 < x < 150"
      return;
    }
    if (categories.find(it => it == category) == undefined) {
      this.errorMsg = "Category Wrong - Music, History, Geography or Famous"
      return;
    }
    this.errorMsg = ""
    let newCategory: ICategory = {title: category}
    let newQuestion: IQuestion = {question: question, answer: answer, value: realValue, category: newCategory}
    this.newItemEvent.emit(newQuestion)
    this.closeModal()
    return
  }

}
