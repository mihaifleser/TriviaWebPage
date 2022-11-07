import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {IQuestion} from "../model/Question.component";

@Injectable()
export class QuestionService {
  private api: string = "http://jservice.io/api/random"


  constructor(private httpClient: HttpClient) {
  }

  getQuestions(nr: number) {
    let params = new HttpParams().set('count', nr)
    return this.httpClient.get<IQuestion[]>(this.api, {params: params})
  }
}

