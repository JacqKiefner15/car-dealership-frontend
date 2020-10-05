import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {EmailData} from './shared/services/models/emailData'




@Injectable({
  providedIn: 'root'
})
export class EmailService {

private emailUrl = 'http://localhost:3000/posts'

  constructor(
    private http: HttpClient
    ) { }



  sendEmail(argparam) {
    return this.http.post<EmailData[]>(this.emailUrl, argparam).pipe(
      map(res => res),
      catchError(this.errorHandler),)
  }

  private errorHandler( error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server error')
  }
}
