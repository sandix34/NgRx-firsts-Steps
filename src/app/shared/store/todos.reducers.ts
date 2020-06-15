import { Action } from '@ngrx/store';
import { Todo } from '../models/todo.model';

// état constitué d'un tableau de todos
export interface TodoState {
  datas: Todo[];
}

// fonction reducer qui prend l'état de l'application, effectue des modifications dessus en fonction des actions et retourne un nouvel objet qui est le nouvel état de l'application
export function todosReducer( state : TodoState, action: Action ) : TodoState {
  return state;
}

