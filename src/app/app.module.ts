import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UsercontactComponent } from './todotasklist/todotasklist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AddTodotaskComponent } from './add-todotask/add-todotask.component';
import { EditTodotaskComponent } from './edit-todotask/edit-todotask.component';
import { DatepickerModule } from 'ng2-datepicker';

// import { DatepickerModule } from 'angular-mat-datepicker'
@NgModule({
  declarations: [
    AppComponent,
    AddTodotaskComponent,
    UsercontactComponent,
    DashboardComponent,
    EditTodotaskComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // DatepickerModule
    DatepickerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
