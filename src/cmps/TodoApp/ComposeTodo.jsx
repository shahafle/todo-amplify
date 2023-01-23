import { useState } from "react"

export function TodoCompose({ addTodo }) {

   const [todoTitle, setTodoTitle] = useState('')

   const handleChange = ({ target: { value } }) => {
      setTodoTitle(value)
   }

   const onAddTodo = (ev) => {
      ev.preventDefault()
      addTodo(todoTitle)
   }

   return <form onSubmit={onAddTodo}>
      <input type="text" placeholder="add todo..." value={todoTitle} onChange={handleChange} />
      <button>ADDD</button>
   </form>
}