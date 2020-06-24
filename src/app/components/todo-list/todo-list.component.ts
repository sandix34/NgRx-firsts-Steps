import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../shared/models/todo.model';
import { Store, select } from '@ngrx/store';
import { State } from '../../shared/store';
// import de toutes les actions avec l'alias todosActions
import * as todosAction from '../../shared/store/todos.actions'
import { todoListSelector, selectedTodoSelector } from 'src/app/shared/store/selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos$: Observable<Todo[]> = this.store.pipe(select(todoListSelector));
  public message: string;
  public selectedTodo$: Observable<Todo> = this.store.pipe(select(selectedTodoSelector));


  constructor(private store: Store<State>) {}

  // déclencher le chargement des todos dès que le composant est affiché
  ngOnInit() {
    this.store.dispatch(new todosAction.FetchTodo());
  }

  public addTodo() {
    this.store.dispatch(new todosAction.CreateTodo({ message: this.message, done: false }));
  }

  public toggleTodo(index: number) {
    this.store.dispatch(new todosAction.ToggleTodo(index));
  }

  public deleteTodo(index: number) {
    console.log(index);
    this.store.dispatch(new todosAction.DeleteTodo(index));
  }

}
