
import { Action } from '@ngrx/store';
import { Todo } from '../models/todo.model';

// définir tous les types d'action possible avec les todos
// définir des constantes permet d'éviter des erreurs de typos avec les noms des actions
// pour plus de clarté indiquer entre crochet la ressource sur laquelle l'action agit
export const TODO_CREATE = '[todo] create';
export const TODO_DELETE = '[todo] delete';
export const TODO_TOGGLE = '[todo] toggle';


// s'assurer que les payload des actions contiennent bien les bonnes propiétés en les typant
// utilisation des classes avec Typescript qui implémente l'interface Action
export class CreateTodo implements Action {
  readonly type = TODO_CREATE;
  constructor(public payload: Todo) {}
}

export class DeleteTodo implements Action {
  readonly type = TODO_DELETE;
  constructor(public payload: number) {}
}

export class ToggleTodo implements Action {
  readonly type = TODO_TOGGLE;
  constructor(public payload: number) {}
}

// créer un type qui contient toutes les classes avec une union de types permise par Typescript
export type TodosActionType = CreateTodo |
                              DeleteTodo |
                              ToggleTodo;