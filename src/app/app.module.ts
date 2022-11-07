import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {QuestionService} from "./services/Question.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {QuestionItemComponent} from "./pages/question-item/questionItem.component";
import {LoadingItemComponent} from "./pages/loading-item/loadingItem.component";
import {ModalItemComponent} from "./pages/modal-item/modalItem.component";

@NgModule({
  declarations: [
    AppComponent,
    QuestionItemComponent,
    LoadingItemComponent,
    ModalItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [QuestionService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
