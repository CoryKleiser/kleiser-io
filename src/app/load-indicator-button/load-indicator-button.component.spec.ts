import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadIndicatorButtonComponent } from './load-indicator-button.component';

describe('LoadIndicatorButtonComponent', () => {
  let page: Page;
  let component: LoadIndicatorButtonComponent;
  let fixture: ComponentFixture<LoadIndicatorButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoadIndicatorButtonComponent]
    });
    createComponent();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadIndicatorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a button', () => {
    expect(page.button).toBeTruthy();
  });

  it('should contain the passed in text as the button text', () => {
    component.buttonText = 'Testing';
    fixture.detectChanges();
    expect(component.buttonText).toBe(page.button.textContent);
    expect(page.button.textContent).toBe('Testing');
  });

  it('should contain the show the passed in text when currentLifecycle is "dormant"', () => {
    component.buttonText = 'Test';
    component.currentLifecycle = 'dormant';
    fixture.detectChanges();
    expect(component.waiting).toBe(false);
    expect(page.button.innerHTML).toBe('Test');
  });

  it('should be disabled when disabled evaluates to true', () => {
    component.disabled = !false;
    fixture.detectChanges();
    expect(page.button.disabled).toBe(true);

  });

  it('should not be disabled when disabled evaluates to true', () => {
    component.disabled = !true;
    fixture.detectChanges();
    expect(page.button.disabled).toBe(false);

  });

  it('should set class to whatever is passed in for classString', () => {
    component.classString = 'Test Testing';
    fixture.detectChanges();
    expect(page.button.classList[0]).toBe('Test');
    expect(page.button.classList[1]).toBe('Testing');
  });

  it('should set attributes to whatever is passed in for attributes', () => {
    component.attributes = {'data-foo': 'TESTING'};
    component.ngOnInit();
    fixture.detectChanges();
    expect(page.query('[data-foo="TESTING"]')).toBeTruthy();
  })

  it('should update div background to whatever is passed in for dotColor', () => {
    component.dotColor = 'cyan';
    component.ngOnInit();
    component.buttonText = 'click';
    component.currentLifecycle = 'waiting';
    fixture.detectChanges();
    page.dots.forEach(el => {
      expect(el.style.cssText.includes('background: cyan')).toBe(true);
    });
  });

  it('should update button text to loading indicator when process', () => {
    page.button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.currentLifecycle).toBe('waiting');
    expect(component.waiting).toBe(true);
    expect(page.button.innerHTML).toBe(component.loadIndicator);
  });

  it('should disable button while waiting for the response from the parent', () => {
    component.currentLifecycle = 'waiting';
    fixture.detectChanges();
    expect(page.button.disabled).toBe(true);
  });

  it('should update button text after current-lifecycle input is updated to "success"', () => {
    // set up buttonText and set component to waiting
    component.buttonText = 'click';
    component.currentLifecycle = 'waiting';
    fixture.detectChanges();
    // make sure component is waiting and text is updated to loadIndicator
    expect(component.waiting).toBe(true);
    expect(page.button.innerHTML).toBe(component.loadIndicator);
    // change processSuccessful to success
    component.currentLifecycle = 'success';
    fixture.detectChanges();
    // what we're actually testing for
    expect(page.button.innerHTML).toBe(component.buttonText);
  });

  it('should update button text after current-lifecycle input is updated to "error"', () => {
    // set up buttonText and set component to waiting
    component.buttonText = 'click';
    component.currentLifecycle = 'waiting';
    fixture.detectChanges();
    // make sure component is waiting and text is updated to loadIndicator
    expect(component.waiting).toBe(true);
    expect(page.button.innerHTML).toBe(component.loadIndicator);
    // change processSuccessful to success
    component.currentLifecycle = 'success';
    fixture.detectChanges();
    // what we're actually testing for
    expect(page.button.innerHTML).toBe(component.buttonText);
  });








  /**
   * This function creates our component and sets up our page
   */
  function createComponent() {
    fixture = TestBed.createComponent(LoadIndicatorButtonComponent);
    component = fixture.componentInstance;
    page = new Page();
    // 1st change detection triggers ngOnInit
    fixture.detectChanges();
    return fixture.whenStable().then(() => {
      // 2nd change detection displays the async
      fixture.detectChanges();
    });
  }

  // Create Page Class
  class Page {

    // getter properties that wait to query the DOM until called
    get button() { return this.query<HTMLButtonElement>('[data-test="load-indicator-button"]'); }
    get dots() { return this.queryAll<HTMLButtonElement>('[data-test="load-indicator-button"] div'); }

    // spys...
    constructor() {
    }

    // query helpers
    query<T>(selector: string): T {
      return fixture.nativeElement.querySelector(selector);
    }

    private queryAll<T>(selector: string): T[] {
      return fixture.nativeElement.querySelectorAll(selector);
    }
  }
});
