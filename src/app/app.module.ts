import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './professor/create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfessorModule } from './professor/professor.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProfessorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
