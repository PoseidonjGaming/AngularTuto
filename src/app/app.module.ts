import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresComponent } from './compenents/pres/pres.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './exo/todo-list/todo-list.component';
import { HomeComponent } from './compenents/home/home.component';
import { FilterComponent } from './compenents/filter/filter.component'

@NgModule({
  declarations: [
    AppComponent,
    PresComponent,
    TodoListComponent,
    HomeComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
