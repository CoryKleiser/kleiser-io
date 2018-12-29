import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { StackoverflowService } from './services/stackoverflow.service';
import { GithubService } from './services/github.service';
import { ContactComponent } from './contact/contact.component';
import { EmailService } from './services/email.service';
import { ForbiddenValidatorDirective } from './shared/forbidden-validator-directive.directive';
import { NavComponent } from './nav/nav.component';
import { LoadIndicatorButtonComponent } from './load-indicator-button/load-indicator-button.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    WorkComponent,
    AboutComponent,
    ContactComponent,
    ForbiddenValidatorDirective,
    NavComponent,
    LoadIndicatorButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [StackoverflowService, GithubService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
