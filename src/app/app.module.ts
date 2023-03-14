import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresComponent } from './compenents/pres/pres.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './exo/todo-list/todo-list.component';
import { HomeComponent } from './compenents/home/home.component';
import { FilterComponent } from './compenents/filter/filter.component';
import { DirectiveComponent } from './compenents/directive/directive.component';
import { LocalComponent } from './compenents/local/local.component';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    PresComponent,
    TodoListComponent,
    HomeComponent,
    FilterComponent,
    DirectiveComponent,
    LocalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue:'fr'
  },{
    provide: DEFAULT_CURRENCY_CODE, useValue:'EUR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
