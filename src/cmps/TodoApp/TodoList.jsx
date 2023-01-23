import { TodoCompose } from "./ComposeTodo";
import { TodoPreview } from "./TodoPreview";

export function TodoList({ todos, toggleTodo, onAddTodo }) {

   return <section className="todo-list">
      {todos.map(todo => <TodoPreview key={todo.id} todo={todo} toggleTodo={toggleTodo} />)}
      <TodoCompose addTodo={onAddTodo} />
   </section>
}