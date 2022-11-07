import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor(private _http:HttpClient) { }

  public getQuestionsOfExamPaper(qid:any) {
    return this._http.get(`${baseUrl}/question/quiz/all/${qid}`);
  }

  //add question
  public addQuestion(question: any) {
    return this._http.post(`${baseUrl}/question/add`, question);
  }

  //delete question
  public deleteQuestion(questionId: any)
  {
    return this._http.delete(`${baseUrl}/question/${questionId}`);
  }
}
