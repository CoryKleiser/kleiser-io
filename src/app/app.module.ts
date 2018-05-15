import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { StackoverflowService } from './stackoverflow.service';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    WorkComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StackoverflowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
