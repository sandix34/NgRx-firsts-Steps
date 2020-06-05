import { ActionReducerMap, Action } from '@ngrx/store';
import { Todo } from '../models/todo.model';

// état constitué d'un tableau de todos
export interface TodoState {
  datas: Todo[];
}

// état général de l'application dans le State qui est un objet contenant des todos qui ont elles-mêmes un état, TodoState
export interface State {
  todos: TodoState;
}

// fonction reducer qui prend l'état de l'application, effectue des modifications dessus en fonction des actions et retourne un nouvel objet qui est le nouvel état de l'application
export function todosReducer( state : TodoState, action: Action ) : TodoState {
  return state;
}

// objet reducers qui contient toutes les fonctions reducers que l'ont passe au store
export const reducers: ActionReducerMap<State> = {
  todos: todosReducer
};