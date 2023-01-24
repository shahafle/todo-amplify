import { useState } from "react"

export function ComposeTodo({ addTodo }) {

   const [todoTitle, setTodoTitle] = useState('')

   const handleChange = ({ target: { value } }) => {
      setTodoTitle(value)
   }

   const onAddTodo = async (ev) => {
      try {
         ev.preventDefault()
         await addTodo(todoTitle)
         setTodoTitle('')
      } catch (err) {
         console.log(err)
      }
   }

   return <form onSubmit={onAddTodo} className='compose-todo'>
      <button disabled={!todoTitle}>+</button>
      <input type="text" placeholder="Add a task" value={todoTitle} onChange={handleChange} spellCheck="false" />
   </form>
}