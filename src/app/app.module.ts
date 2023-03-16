import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresComponent } from './compenents/pres/pres.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './exo/todo-list/todo-list.component';
import { HomeComponent } from './compenents/home/home.component';
import { FilterComponent } from './compenents/filter/filter.component';
import { DirectiveComponent } from './compenents/directive/directive.component';
import { LocalComponent } from './compenents/local/local.component';
import { CustomPipeComponent } from './compenents/custom-pipe/custom-pipe.component';
import { SortPipe } from './pipes/sort.pipe';
import { FormComponent } from './compenents/forms/form/form.component';
import { RactiveFormComponent } from './compenents/forms/ractive-form/ractive-form.component';
import { ServiceComponent } from './compenents/service/service.component';
import { ObservableComponent } from './compenents/observable/observable.component';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    PresComponent,
    TodoListComponent,
    HomeComponent,
    FilterComponent,
    DirectiveComponent,
    LocalComponent,
    CustomPipeComponent,
    SortPipe,
    FormComponent,
    RactiveFormComponent,
    ServiceComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue:'fr'
  },{
    provide: DEFAULT_CURRENCY_CODE, useValue:'EUR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
