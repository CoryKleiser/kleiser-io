import {Component, Input, OnInit} from '@angular/core';

import { Email } from '../types/email';

import { EmailService } from '../services/email.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() name = new FormControl();
  @Input() email = new FormControl();
  @Input() subject = new FormControl();
  @Input() message = new FormControl();
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
    this.emailService.sendEmail(this.emailContent)
      .subscribe( res => {
        console.log(res);
        if (res.statusCode !== 201) {
          this.error = res;
        } else {
          this.error = null;
        }
        setTimeout(() => this.error = '', 5000);
      });
  }

}
