import * as todosReducer from './todos.reducers';
import { ActionReducerMap } from '@ngrx/store';
import * as routerReducer from '@ngrx/router-store';
import { RouterStateUrl } from './router.helper';


// état général de l'application dans le State qui est un objet contenant des todos qui ont elles-mêmes un état, TodoState
export interface State {
  todos: todosReducer.TodoState;
  router: routerReducer.RouterReducerState<RouterStateUrl>;
}

// objet reducers qui contient toutes les fonctions reducers que l'ont passe au store
export const reducers: ActionReducerMap<State> = {
  todos: todosReducer.todosReducer,
  router: routerReducer.routerReducer
};