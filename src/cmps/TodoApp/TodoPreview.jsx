export function TodoPreview({ todo, toggleTodo }) {
   return <div className="todo-preview">
      <p onClick={() => { toggleTodo(todo.id) }}>{todo.title}</p>
   </div>
}