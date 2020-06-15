import * as todosReducer from './todos.reducers';
import { ActionReducerMap } from '@ngrx/store';


// état général de l'application dans le State qui est un objet contenant des todos qui ont elles-mêmes un état, TodoState
export interface State {
  todos: todosReducer.TodoState;
}

// objet reducers qui contient toutes les fonctions reducers que l'ont passe au store
export const reducers: ActionReducerMap<State> = {
  todos: todosReducer.todosReducer
};