import { TodoPreview } from "./TodoPreview";

export function TodoList({ todos, onUpdateTodo, onRemoveTodo }) {

   return <div className="todo-list">
      {todos.map(todo => <TodoPreview key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />)}
   </div>
}