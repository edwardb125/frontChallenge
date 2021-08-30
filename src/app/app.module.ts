import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Operation } from './operations/operations.component';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    Operation
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
