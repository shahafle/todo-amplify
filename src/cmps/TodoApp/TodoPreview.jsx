export function TodoPreview({ todo, onToggleTodo, onRemoveTodo }) {
   return <div className="todo-preview">
      <p onClick={() => { onToggleTodo(todo.id) }}>{todo.title}</p>
      <span onClick={() => { onRemoveTodo(todo.id) }}>X</span>
   </div>
}