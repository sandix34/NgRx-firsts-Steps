import { Action } from '@ngrx/store';
import { Todo } from '../models/todo.model';

// état constitué d'un tableau de todos
export interface TodoState {
  datas: Todo[];
}

// ajout d'un état initial pour éviter que le store soit undefined
const initialState = {
  datas: [
    {
      message: 'manger une pizza',
      done: false
    }
  ]
}; 

// fonction reducer qui prend l'état de l'application, effectue des modifications dessus en fonction des actions et retourne un nouvel objet qui est le nouvel état de l'application
export function todosReducer( state : TodoState = initialState, action: Action ) : TodoState {
  console.log(state);
  console.log(action); 
  return state;
}

