//Los types de typescript :
export type Todo = {
  completed: any;
  id: number;
  label: string;
};

export type Store = {
  todos: Todo[];
  todoFetch: Todo[] | null;
};

export type Action =
  | {
      type: "ADD_TODO";
      payload: Todo;
    }
  | {
      type: "CLEAR_TODOS";
    }
  | {
      type: "SET_TODO_FETCH";
      payload: Todo[] | null;
    };
//------------------------------


// Acá esta el famoso Store.
export const initialStore = (): Store => ({ // Podemos dejarle datos predefinidos accesibles desde el inicio.
  todos: [
    { id: 1, label: "Hacer la cama", completed: false },
    { id: 2, label: "Sacar la basura", completed: false },
    { id: 3, label: "Dar clase", completed: false },
  ],
  todoFetch: null,
});

// Y acá está quien se encarga de modificarlo : el reducer. Es una función pura que recibe el estado actual
// y una acción, y devuelve un nuevo estado.
export default function storeReducer(state: Store, action: Action): Store {
  
  switch (action.type) { // Action es el objeto que le pasamos a dispatch. Acá usamos su type para saber que hacer.
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload], // aca del action usamos el payload que es el objeto con el texto y la fecha.
      };

    case "CLEAR_TODOS":
      return {
        ...state,
        todos: [],
      };

    case "SET_TODO_FETCH":
      return {
        ...state,
        todoFetch: action.payload,
      };

    default:
      return state;
  }
}
