import {Component, OnInit} from '@angular/core';

import { Email } from '../email';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  emailContent: Email;
  constructor() { }

  ngOnInit() {
    this.emailContent = {
      name: 'name',
      email: 'email',
      subject: 'subject',
      message: 'message'
    };
  }

}
