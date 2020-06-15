import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './shared/models/todo.model';
import { TodoService } from './shared/services/todo.service';
import { Store } from '@ngrx/store';
import { State } from './shared/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos$: Observable<Todo[]> = this.todoService.todos$.asObservable();
  public message: string;

  constructor(private todoService: TodoService, private store: Store<State>) {}

  public addTodo() {
    // this.todoService.addTodo({ message: this.message, done: false });
    this.store.dispatch({
      type: '[todo] create',
      payload: { message: this.message, done: false }
    })
  }

  public toggleTodo(index: number) {
    this.todoService.toggleTodo(index);
  }

  public deleteTodo(index: number) {
    console.log(index);
    this.todoService.deleteTodo(index);
  }

}
