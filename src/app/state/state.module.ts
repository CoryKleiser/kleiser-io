// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {NxModule} from '@nrwl/nx';
import {reducers} from '.';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forRoot([ ]),
  ],
  declarations: []
})
export class StateModule { }
