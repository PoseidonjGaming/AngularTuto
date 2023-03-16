import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compenents/home/home.component'
import { PresComponent } from './compenents/pres/pres.component'
import { TodoListComponent } from './exo/todo-list/todo-list.component'
import { FilterComponent } from './compenents/filter/filter.component'
import { DirectiveComponent } from './compenents/directive/directive.component'
import { LocalComponent } from './compenents/local/local.component'
import { CustomPipeComponent } from './compenents/custom-pipe/custom-pipe.component'
import { FormComponent } from './compenents/forms/form/form.component'
import { RactiveFormComponent } from './compenents/forms/ractive-form/ractive-form.component'
import { ServiceComponent } from './compenents/service/service.component'
import { ObservableComponent } from './compenents/observable/observable.component';
import { ProductComponent } from './compenents/product/product/product.component';
import { DetailProductComponent } from './compenents/product/detail-product/detail-product.component';
import { NotFoundComponent } from './compenents/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Accueil' },
  { path: 'pres', component: PresComponent, title: 'Pres' },
  { path: 'todo', component: TodoListComponent, title: 'Todo' },
  { path: 'filter', component: FilterComponent, title: 'Filter' },
  { path: 'filter', component: FilterComponent, title: 'Filter' },
  { path: 'directive', component: DirectiveComponent, title: 'directive' },
  { path: 'local', component: LocalComponent, title: 'locals' },
  {
    path: 'custom', children: [
      { path: 'pipe', component: CustomPipeComponent },
      { path: '', redirectTo: 'pipe', pathMatch: "full" }
    ]
  },
  { path: 'driven-forms', component: FormComponent, title: 'Forms' },
  { path: 'reactive-forms', component: RactiveFormComponent, title: 'Reactive Forms' },
  { path: 'service', component: ServiceComponent, title: 'Service' },
  { path: 'obs', component: ObservableComponent, title: 'Observable' },
  {
    path: 'product', children: [
      { path: ':id', component: DetailProductComponent, title: 'Detail product' },
      { path: '', component: ProductComponent, title: ' product' },
    ], component: ProductComponent, title: 'product'
  },
  { path: '**', component: NotFoundComponent, title: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
