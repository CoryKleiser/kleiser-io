import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ContactComponent } from './contact.component';
import {DebugElement} from '@angular/core';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let nameEl: DebugElement;
  let emailEl: DebugElement;
  let subjectEl: DebugElement;
  let messageEl: DebugElement;
  let submitEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ]
    });

    // create component and test fixtures
    fixture = TestBed.createComponent(ContactComponent);

    // get test component from fixture
    component = fixture.componentInstance;

    nameEl = fixture.debugElement.query(By.css('[data-test=contact-name]'));
    emailEl = fixture.debugElement.query(By.css('[data-test=contact-email]'));
    subjectEl = fixture.debugElement.query(By.css('[data-test=message-subject]'));
    messageEl = fixture.debugElement.query(By.css('[data-test=message-body]'));
    submitEl = fixture.debugElement.query(By.css('[data-test=contact-submit]'));

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
