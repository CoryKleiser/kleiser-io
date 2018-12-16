import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadIndicatorButtonComponent } from './load-indicator-button.component';

fdescribe('LoadIndicatorButtonComponent', () => {
  let page: Page;
  let component: LoadIndicatorButtonComponent;
  let fixture: ComponentFixture<LoadIndicatorButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadIndicatorButtonComponent ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadIndicatorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

    constructor() {}

    //// query helpers ////
    private query<T>(selector: string): T {
      return fixture.nativeElement.querySelector(selector);
    }

    private queryAll<T>(selector: string): T[] {
      return fixture.nativeElement.querySelectorAll(selector);
    }
  }
});
