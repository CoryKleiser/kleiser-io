import {Component, OnInit} from '@angular/core';

import { Email } from '../email';

import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  emailContent: Email;
  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emailContent = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  send() {
    this.emailService.sendEmail(this.emailContent.name, this.emailContent.subject, this.emailContent.message, this.emailContent.email)
      .subscribe( res => console.log(res));
  }

}
