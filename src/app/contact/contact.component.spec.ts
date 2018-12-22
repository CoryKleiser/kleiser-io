import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ContactComponent } from './contact.component';
import {FormsModule} from '@angular/forms';
import {EmailService} from '../services/email.service';
import {ForbiddenValidatorDirective} from '../shared/forbidden-validator-directive.directive';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {LoadIndicatorButtonComponent} from '../load-indicator-button/load-indicator-button.component';


describe('ContactComponent', () => {
  let page: Page;
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let emailServiceStub: Partial<EmailService>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientTestingModule ],
      declarations: [ ContactComponent, ForbiddenValidatorDirective, LoadIndicatorButtonComponent ],
      providers: [ {provide: EmailService, useValue: emailServiceStub} ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });
  }));

  beforeEach(() => {
    // create component and test fixtures
    createComponent();

    // create service stub
    emailServiceStub = {};
    // define elements


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update component.emailContent.name on update to name', () => {
    setTextInputAndDetectChanges(page.nameInput, page.testEmailContent.name);
    expect(component.emailContent.name).toBe(page.testEmailContent.name);
  });

  it('should update component.emailContent.email on update to email', () => {
    setTextInputAndDetectChanges(page.emailInput, page.testEmailContent.email);
    expect(component.emailContent.email).toBe(page.testEmailContent.email);
  });

  it('should update component.emailContent.subject on update to subject', () => {
    setTextInputAndDetectChanges(page.subjectInput, page.testEmailContent.subject);
    expect(component.emailContent.subject).toBe(page.testEmailContent.subject);
  });

  it('should update component.emailContent.message on update to message', () => {
    setTextInputAndDetectChanges(page.messageInput, page.testEmailContent.message);
    expect(component.emailContent.message).toBe(page.testEmailContent.message);
  });

  it('should enable submit button when all input meets validation requirements', () => {
    setTextInputAndDetectChanges(page.nameInput, page.testEmailContent.name);
    setTextInputAndDetectChanges(page.emailInput, page.testEmailContent.email);
    setTextInputAndDetectChanges(page.subjectInput, page.testEmailContent.subject);
    setTextInputAndDetectChanges(page.messageInput, page.testEmailContent.message);
    expect(page.submitButton.disabled).toBe(false);
  });

  it('should disable submit button when there is no name', () => {
    setTextInputAndDetectChanges(page.emailInput, page.testEmailContent.email);
    setTextInputAndDetectChanges(page.subjectInput, page.testEmailContent.subject);
    setTextInputAndDetectChanges(page.messageInput, page.testEmailContent.message);
    expect(page.submitButton.disabled).toBe(true);
  });

  it('should disable submit button when the name is invalid (too short)', () => {
    setTextInputAndDetectChanges(page.nameInput, page.testEmailContentInvalid.name);
    setTextInputAndDetectChanges(page.emailInput, page.testEmailContent.email);
    setTextInputAndDetectChanges(page.subjectInput, page.testEmailContent.subject);
    setTextInputAndDetectChanges(page.messageInput, page.testEmailContent.message);
    expect(page.submitButton.disabled).toBe(true);
  });

  it('should disable submit button when the name is name', () => {
    setTextInputAndDetectChanges(page.nameInput, 'name');
    setTextInputAndDetectChanges(page.emailInput, page.testEmailContent.email);
    setTextInputAndDetectChanges(page.subjectInput, page.testEmailContent.subject);
    setTextInputAndDetectChanges(page.messageInput, page.testEmailContent.message);
    fixture.detectChanges();
    expect(page.submitButton.disabled).toBe(true);
  });

  it('should disable submit button when there is no email', () => {
    setTextInputAndDetectChanges(page.nameInput, page.testEmailContent.name);
    setTextInputAndDetectChanges(page.subjectInput, page.testEmailContent.subject);
    setTextInputAndDetectChanges(page.messageInput, page.testEmailContent.message);
    expect(page.submitButton.disabled).toBe(true);
  });

  it('should disable submit button when email is invalid', () => {
    setTextInputAndDetectChanges(page.nameInput, page.testEmailContent.name);
    setTextInputAndDetectChanges(page.subjectInput, page.testEmailContent.subject);
    setTextInputAndDetectChanges(page.messageInput, page.testEmailContent.message);
    setTextInputAndDetectChanges(page.emailInput, page.testEmailContentInvalid.email);
    expect(page.submitButton.disabled).toBe(true);
  });

  it('should disable submit button when there is no subject', () => {
    setTextInputAndDetectChanges(page.nameInput, page.testEmailContent.name);
    setTextInputAndDetectChanges(page.emailInput, page.testEmailContent.email);
    setTextInputAndDetectChanges(page.messageInput, page.testEmailContent.message);
    expect(page.submitButton.disabled).toBe(true);
  });

  it('should disable submit button when there is no message', () => {
    setTextInputAndDetectChanges(page.nameInput, page.testEmailContent.name);
    setTextInputAndDetectChanges(page.emailInput, page.testEmailContent.email);
    setTextInputAndDetectChanges(page.subjectInput, page.testEmailContent.subject);
    expect(page.submitButton.disabled).toBe(true);
  });

  it('should disable submit button when the message is too short', () => {
    setTextInputAndDetectChanges(page.nameInput, page.testEmailContent.name);
    setTextInputAndDetectChanges(page.emailInput, page.testEmailContent.email);
    setTextInputAndDetectChanges(page.subjectInput, page.testEmailContent.subject);
    setTextInputAndDetectChanges(page.messageInput, page.testEmailContentInvalid.message);
    expect(page.submitButton.disabled).toBe(true);
  });

  // Helper Functions

  /**
   * This function creates our component and sets up our page
   */
  function createComponent() {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    page = new Page();

    // 1st change detection triggers ngOnInit
    fixture.detectChanges();
    return fixture.whenStable().then(() => {
      // 2nd change detection displays the async
      fixture.detectChanges();
    });
  }


  function setTextInputAndDetectChanges(inputElement: HTMLInputElement, input: string): void {
    // define simulated input
    inputElement.value = input;
    // dispatch DOM event to tell Angular about the updated text
    inputElement.dispatchEvent(new Event('input'));
    // dispatch DOM event to tell Angular about the updated text
    fixture.detectChanges();
  }

  // Create Page Class
  class Page {
    // getter properties wait to query the DOM until called.
    get nameInput()   { return this.query<HTMLInputElement>('[data-test="contact-name"]'); }
    get emailInput() { return this.query<HTMLInputElement>('[data-test="contact-email"]'); }
    get subjectInput() { return this.query<HTMLInputElement>('[data-test="message-subject"]'); }
    get messageInput() { return this.query<HTMLInputElement>('[data-test="message-body"]'); }
    get submitButton() { return this.query<HTMLButtonElement>('[data-test="contact-submit"'); }

    sendSpy: jasmine.Spy;
    testEmailContent = {
        name: 'Testing 123',
        email: 'test@test.test',
        subject: 'Test Subject',
        message: 'This message must be at least 25 characters long.'
    };
    testEmailContentInvalid = {
      name: 'bob',
      email: 'failing@email',
      subject: '',
      message: 'This message is to short'
    };
    constructor() {
      // spy on component's `gotoList()` method
      this.sendSpy = spyOn(component, 'send').and.callThrough();
    }

    //// query helpers ////
    private query<T>(selector: string): T {
      return fixture.nativeElement.querySelector(selector);
    }

    private queryAll<T>(selector: string): T[] {
      return fixture.nativeElement.querySelectorAll(selector);
    }
  }

});



