import { useState } from "react"
import { formatTimeSince } from "../../services/util.service"
import { BiTimeFive } from "react-icons/bi";

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

   return <div className={`todo-preview  ${todo.isCompleted ? 'completed' : ''}`}>
      <span className="checkbox" onClick={() => { onToggleTodo(todo.id) }}></span>
      <div className="preview-info">
         <textarea type="text" onChange={handleChange} value={title} onBlur={onBlur} />
         <div className="time">
            <BiTimeFive />
            <span>{formatTimeSince(todo.createdAt)}</span></div>
      </div>
      <button className="remove" onClick={() => { onRemoveTodo(todo.id) }}>Remove</button>
   </div>
}