
import { Todo } from '../models/todo.model';
import * as todosAction from './todos.actions';

// état constitué d'un tableau de todos, et de propriétés concernant la requête de récupération
export interface TodoState {
  datas: Todo[];
  loading: boolean;
  loaded: boolean;
  error: any
}

// ajout d'un état initial pour éviter que le store soit undefined
const initialState = {
  datas: null,
  loading: false,
  loaded: false,
  error: null
}; 

// fonction reducer qui prend l'état de l'application, effectue des modifications dessus en fonction des actions et retourne un nouvel objet qui est le nouvel état de l'application
export function todosReducer( state: TodoState = initialState, action: todosAction.TodosActionType ): TodoState {
  switch (action.type)  {
    case todosAction.FETCH_TODO : 
      return {
        ...state,
        loading: true
      };
    case todosAction.FETCH_TODO_SUCCESS : 
      return {
        ...state,
        datas: action.payload,
        loading: false,
        loaded: true,
        error: null
      };
    case todosAction.FETCH_TODO_ERROR : 
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action.payload
      }
    case todosAction.TODO_CREATE :
      return {
        ...state,
        datas: [...state.datas, action.payload]
      };
    case todosAction.TODO_DELETE :
      return {
        ...state,
        datas: state.datas.filter( (t, i) => i !== action.payload )
      };
    case todosAction.TODO_TOGGLE :
      return {
        ...state,
        datas: [
          ...state.datas.map((t, i) =>
            i === action.payload ? { ...t, done: !t.done } : t
          )
        ]
      };
    default:
      return state;
  }
}

