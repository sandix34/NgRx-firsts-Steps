import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todos.reducers';
import { RouterStateUrl } from './router.helper';
import * as routerReducer from '@ngrx/router-store';
import { Todo } from '../models/todo.model';

// permet de récupérer les todos sur le plus niveau de l'état de l'application
export const todosSelector = createFeatureSelector<TodoState>('todos');

export const routerSelector = createFeatureSelector<routerReducer.RouterReducerState<RouterStateUrl>>('router');

// permet de sélectionner la propriété datas sur l'état des todos
export const todoListSelector = createSelector(
  todosSelector,
  (todoState: TodoState) => todoState.datas
);

export const MyRouterStateSelector = createSelector(
  routerSelector,
  routerState => routerState.state
);


// combine l'état des todos et du router pour retourner la todo sélectionnée 
export const selectedTodoSelector = createSelector(
  todoListSelector,
  MyRouterStateSelector,
  (todos: Todo[], routerState: RouterStateUrl) => {
    const todoId = routerState.params.id;
    if (todoId && todos) {
      return todos.find(t => t.id === todoId);
    } else {
      return null;
    }
  }
)