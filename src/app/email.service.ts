import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(name: string, subject: string, message: string, fromEmail: string): any {
    const body = {
      name: name,
      subject: subject,
      message: message,
      email: fromEmail
    };
    return this.http.post('http://localhost:3000/api/sendemail', body, httpOptions);
  }

}
