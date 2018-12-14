import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ContactComponent } from './contact.component';
import {FormsModule} from '@angular/forms';
import {EmailService} from '../services/email.service';

fdescribe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let emailServiceStub: Partial<EmailService>;
  let nameEl: HTMLInputElement;
  let emailEl: HTMLInputElement;
  let subjectEl: HTMLInputElement;
  let messageEl: HTMLInputElement;
  let submitEl: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientTestingModule ],
      declarations: [ ContactComponent ],
      providers: [ {provide: EmailService, useValue: emailServiceStub} ]
    });
  }));

  beforeEach(() => {
    // create component and test fixtures
    fixture = TestBed.createComponent(ContactComponent);

    fixture.detectChanges();

    // get test component from fixture
    component = fixture.componentInstance;


    // create service stub
    emailServiceStub = {};
    // define elements
    nameEl = fixture.nativeElement.querySelector('[data-test="contact-name"]');
    emailEl = fixture.nativeElement.querySelector('[data-test=contact-email]');
    subjectEl = fixture.nativeElement.querySelector('[data-test=message-subject]');
    messageEl = fixture.nativeElement.querySelector('[data-test=message-body]');
    submitEl = fixture.nativeElement.querySelector('[data-test=contact-submit]');

  });

  it('should create', () => { // passes
    expect(component).toBeTruthy();
  });

  it('should update component.emailContent.name on update to name', () => { // fails
    // define simulated name text
    nameEl.value = 'Test Name';
    // dispatch DOM event to tell Angular about the updated text
    nameEl.dispatchEvent(new Event('input'));
    // Tell Angular to update the binding
    fixture.detectChanges();

    expect(component.emailContent.name).toBe('Test Name');
  });

});
