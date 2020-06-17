import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FETCH_TODO, FetchTodo, FetchTodoSuccess, FetchTodoError } from './todos.actions';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.model';

// Effect responsable d'effectuer la requête en utilisant le service TodoService
// puis dispatch l'action correspondante suivant le succès ou non de la requête
@Injectable()
export class TodosEffects {
  @Effect()
  fetchTodo$: Observable<Action> = this.actions$.pipe(
    // utiliser l'opérateur ofType pour filtrer l'action FETCH_TODO
    ofType(FETCH_TODO),
    // utiliser l'opérateur switchMap pour créer une nouvelle requête à chaque fois que l'action FETCH_TODO est dispatch 
    switchMap((fetchTodo: FetchTodo) => this.todoService.getTodos()),
    map((todos: Todo[]) => new FetchTodoSuccess(todos)),
    catchError((err: any) => of(new FetchTodoError(err)))
  );

  constructor(private todoService: TodoService, private actions$: Actions) {}
}