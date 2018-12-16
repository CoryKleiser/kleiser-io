import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import {StackoverflowService} from '../services/stackoverflow.service';
import {GithubService} from '../services/github.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AboutComponent', () => {
  let page: Page;
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>
  let stackoverflowServiceStub: Partial<StackoverflowService>;
  let githubServiceStub: Partial<GithubService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ AboutComponent ],
      providers: [ StackoverflowService, GithubService ]
    });
  }));

 beforeEach(() => {
    // create component and test fixtures
    createComponent();

    // create service stub
    stackoverflowServiceStub = {};
    githubServiceStub = {};
    // define elements


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * This function creates our component and sets up our page
   */
  function createComponent() {
    fixture = TestBed.createComponent(AboutComponent);
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
    get pageTitle() { return this.query<HTMLHeadingElement>('[data-test="about-title"') }

    showSoUserInfoSpy: jasmine.Spy;
    showSoTopTagsSpy: jasmine.Spy;
    showGithubProfileSpy: jasmine.Spy;
    showGithubReposSpy: jasmine.Spy;

    constructor() {
      // spy on component's `gotoList()` method
      this.showSoUserInfoSpy = spyOn(component, 'showSoUserInfo').and.callThrough();
      this.showSoTopTagsSpy = spyOn(component, 'showSoTopTags').and.callThrough();
      this.showGithubProfileSpy = spyOn(component, 'showGithubProfile').and.callThrough();
      this.showGithubReposSpy = spyOn(component, 'showGithubRepos').and.callThrough();
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
