import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { StackoverflowService } from './stackoverflow.service';
import { GithubService } from './github.service';
import { EyeComponent } from './eye/eye.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    WorkComponent,
    AboutComponent,
    EyeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [StackoverflowService, GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
