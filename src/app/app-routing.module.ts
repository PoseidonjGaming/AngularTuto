import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compenents/home/home.component'
import { PresComponent } from './compenents/pres/pres.component'
import { TodoListComponent } from './exo/todo-list/todo-list.component'
import { FilterComponent } from './compenents/filter/filter.component'
import { DirectiveComponent } from './compenents/directive/directive.component'
import { LocalComponent } from './compenents/local/local.component'
import { CustomPipeComponent } from './compenents/custom-pipe/custom-pipe.component'

const routes: Routes = [
  { path: '', component: HomeComponent , title: 'Accueil'},
  { path: 'pres', component: PresComponent , title: 'Pres'},
  { path: 'todo', component: TodoListComponent,  title: 'Todo'},
  { path: 'filter', component: FilterComponent,  title: 'Filter'},
  { path: 'filter', component: FilterComponent,  title: 'Filter'},
  { path: 'directive', component: DirectiveComponent,  title: 'directive'},
  { path: 'local', component: LocalComponent,  title: 'locals'},
  { path: 'custom', children:[
    { path:'pipe', component: CustomPipeComponent },
    { path:'', redirectTo:'pipe', pathMatch: "full"}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
