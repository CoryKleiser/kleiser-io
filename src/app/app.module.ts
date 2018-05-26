import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { StackoverflowService } from './stackoverflow.service';
import { GithubService } from './github.service';
import { EyeComponent } from './eye/eye.component';
import { ContactComponent } from './contact/contact.component';
import { EmailService } from './email.service';
import { ForbiddenValidatorDirective } from './shared/forbidden-validator-directive.directive';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    WorkComponent,
    AboutComponent,
    EyeComponent,
    ContactComponent,
    ForbiddenValidatorDirective,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [StackoverflowService, GithubService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
