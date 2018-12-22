import {Component, Input, OnInit} from '@angular/core';

import { Email } from '../types/email';

import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() name: string;
  @Input() email: string;
  @Input() subject: string;
  @Input() message: string;
  error: any = '';

  emailStatus: string;

  submitBtnAttrbutes: any;

  emailContent: Email;
  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emailContent = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    this.emailStatus = 'dormant';
    this.submitBtnAttrbutes = {
      'data-test': 'contact-submit',
    };
  }

  send() {
    this.emailService.sendEmail(this.emailContent)
      .subscribe( res => {
        if (res.statusCode !== 201) {
          this.emailStatus = 'error';
          this.error = res;
        } else {
          this.emailStatus = 'success';
          this.error = null;
        }
        setTimeout(() => this.error = '', 5000);
      });
  }

}
