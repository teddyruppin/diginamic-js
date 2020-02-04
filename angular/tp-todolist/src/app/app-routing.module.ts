import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoeditComponent } from './todoedit/todoedit.component';




const routes: Routes = [
  { path: 'list', component: TodolistComponent },
  { path: 'add', component: TodoeditComponent },
  { path: 'edit/:id', component: TodoeditComponent },
  { path: '', pathMatch: 'full', redirectTo: '/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
