
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "../hooks"
 

export const TodoApp = () => {
  
    const {todos, handleDeleteTodo, handleToggleTodo, handleNewTodo, todosCount, pendingTodosCount} = useTodos()

  return (
    <>
        <h1>TodoAppp ({todosCount}) <small>Pendientes: {pendingTodosCount} </small></h1>
        <br />
        <div className="row">
            <div className="col-7">
            {/* TodoList */}
               <TodoList 
               todos={todos} 
               onDeleteTodo={ handleDeleteTodo } 
               onToggleTodo={ handleToggleTodo } 
               
               />
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
