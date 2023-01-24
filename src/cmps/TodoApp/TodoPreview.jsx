import { useState } from "react"

export function TodoPreview({ todo, onToggleTodo, onUpdateTodo, onRemoveTodo }) {

   const [title, setTitle] = useState(todo.title)

   const handleChange = ({ target: { value } }) => {
      setTitle(value)
   }

   const onBlur = (ev) => {
      console.log('BLUR', ev.target)
      if (!title) ev.target.focus()
      else {
         onUpdateTodo(todo.id, title)
      }
   }

   return <div className="todo-preview">
      <span onClick={() => { onToggleTodo(todo.id) }}>{todo.isCompleted ? 'V' : '_'}</span>
      <div>
         <input type="text" onChange={handleChange} value={title} onBlur={onBlur} />
         <span>{todo.createdAt}</span>
      </div>
      <span onClick={() => { onRemoveTodo(todo.id) }}>X</span>
   </div>
}