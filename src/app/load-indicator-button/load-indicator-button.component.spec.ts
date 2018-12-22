import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadIndicatorButtonComponent } from './load-indicator-button.component';

fdescribe('LoadIndicatorButtonComponent', () => {
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

  it('should update button text to loading indicator when process', () => {
    page.button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.waiting).toBe(true);
    expect(page.button.innerHTML).toBe(component.loadIndicator);
  });

  it('should update button text after processSuccessful input is updated to "success"', () => {
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

    // spys...
    constructor() {
    }

    // query helpers
    private query<T>(selector: string): T {
      return fixture.nativeElement.querySelector(selector);
    }

    private queryAll<T>(selector: string): T[] {
      return fixture.nativeElement.querySelectorAll(selector);
    }
  }
});
