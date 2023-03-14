import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compenents/home/home.component'
import { PresComponent } from './compenents/pres/pres.component'
import { TodoListComponent } from './exo/todo-list/todo-list.component'
import { FilterComponent } from './compenents/filter/filter.component'
import { DirectiveComponent } from './compenents/directive/directive.component'

const routes: Routes = [
  { path: '', component: HomeComponent , title: 'Accueil'},
  { path: 'pres', component: PresComponent , title: 'Pres'},
  { path: 'todo', component: TodoListComponent,  title: 'Todo'},
  { path: 'filter', component: FilterComponent,  title: 'Filter'},
  { path: 'filter', component: FilterComponent,  title: 'Filter'},
  { path: 'directive', component: DirectiveComponent,  title: 'directive'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
