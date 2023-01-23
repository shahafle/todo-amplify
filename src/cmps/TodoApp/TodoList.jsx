import { TodoCompose } from "./ComposeTodo";
import { TodoPreview } from "./TodoPreview";

export function TodoList({ todos, onToggleTodo, onUpdateTodo, onAddTodo, onRemoveTodo }) {

   return <section className="todo-list">
      {todos.map(todo => <TodoPreview key={todo.id} todo={todo} onToggleTodo={onToggleTodo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />)}
      <TodoCompose addTodo={onAddTodo} />
   </section>
}