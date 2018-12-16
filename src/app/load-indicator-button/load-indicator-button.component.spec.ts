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

  it('should emit a click event when button is clicked', () => {

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

    constructor() {
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
