import { TodoPreview } from "./TodoPreview";

export function TodoList({ todos, onToggleTodo, onUpdateTodo, onRemoveTodo }) {

   return <div className="todo-list">
      {todos.map(todo => <TodoPreview key={todo.id} todo={todo} onToggleTodo={onToggleTodo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />)}
   </div>
}