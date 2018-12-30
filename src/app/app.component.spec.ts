import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {WorkComponent} from './work/work.component';
import {IntroComponent} from './intro/intro.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {NavComponent} from './nav/nav.component';
import {FormsModule} from '@angular/forms';
import {StackoverflowService} from './services/stackoverflow.service';
import {GithubService} from './services/github.service';
import {EmailService} from './services/email.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LoadIndicatorButtonComponent} from './load-indicator-button/load-indicator-button.component';
import {DeferLoadImageComponent} from './defer-load-image/defer-load-image.component';
describe('AppComponent', () => {
  let page: Page;
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientTestingModule ],
      declarations: [
        AppComponent,
        NavComponent,
        IntroComponent,
        WorkComponent,
        AboutComponent,
        ContactComponent,
        LoadIndicatorButtonComponent,
        DeferLoadImageComponent
      ],
      providers: [ StackoverflowService, GithubService, EmailService ]
    });
  }));

  beforeEach(() => {
    createComponent();
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Welcome to Kleiser IO'`, async(() => {
    expect(app.title).toEqual('Welcome to Kleiser IO');
  }));

  /**
   * This function creates our component and sets up our page
   */
  function createComponent() {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
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
