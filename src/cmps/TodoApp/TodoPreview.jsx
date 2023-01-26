import { formatTimeSince } from "../../services/util.service"
import { BiTimeFive } from "react-icons/bi";

export function TodoPreview({ todo, onUpdateTodo, onRemoveTodo }) {

   const handleContentEdit = ({ target }) => {
      const text = target.textContent
      if (!text) {
         target.textContent = todo.title
      } else {
         onUpdateTodo(todo.id, 'title', text)
      }
   }

   return <div className={`todo-preview  ${todo.isCompleted ? 'completed' : ''}`}>
      <span className="checkbox" onClick={() => { onUpdateTodo(todo.id, 'isCompleted', !todo.isCompleted) }}></span>
      <div className="preview-info">
         <p onBlur={handleContentEdit} contentEditable="true" suppressContentEditableWarning={true}>{todo.title}</p>
         <div className="time">
            <BiTimeFive />
            <span>{formatTimeSince(todo.createdAt)}</span></div>
      </div>
      <button className="remove" onClick={() => { onRemoveTodo(todo.id) }}>Remove</button>
   </div>
}