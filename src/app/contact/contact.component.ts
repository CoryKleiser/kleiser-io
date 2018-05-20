import {Component, OnInit} from '@angular/core';

import { Email } from '../email';

import { EmailService } from '../email.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name = new FormControl();
  email = new FormControl();
  subject = new FormControl();
  message = new FormControl();
  error: any = '';

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
      .subscribe( res => {
        this.error = res;
        setTimeout(() => this.error = '', 5000);
      });
  }

}
