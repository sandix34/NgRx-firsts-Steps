import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';


const routes: Routes = [
  { path: 'todo', component: TodoListComponent },
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'todo/:id', component: TodoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
