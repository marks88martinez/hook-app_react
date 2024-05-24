import { useReducer } from "react"
import { todoReducer } from './todoReducer'
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
 
const initialState = [
    {
        id: new Date().getTime(),
        description: ' Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() + 100,
        description: ' Recolectar la piedra del tiempo',
        done: false,
    },
]
export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState)

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }


  return (
    <>
        <h1>TodoAppp (10) <small>Pendientes: 2 </small></h1>
        <br />
        <div className="row">
            <div className="col-7">
            {/* TodoList */}
               <TodoList todos={todos}/>
            {/* TodoList */}
            </div>
        </div>
        <div className="col-5 mt-3">
            <h4>Agregar Todo</h4>
            <hr />
            {/* TodoAdd */}
            <TodoAdd onNewTodo={handleNewTodo} />
             {/* TodoAdd */}
        </div>

      
    </>
  )
}
