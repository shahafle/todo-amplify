import { API, graphqlOperation } from 'aws-amplify'
import { useEffect, useState } from 'react';

import { ListTodos, UpdateTodo } from './graphql/queries';

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    const todoData = await API.graphql(graphqlOperation(ListTodos))
    console.log(todoData.data.listTodos.items);
    setTodos(todoData.data.listTodos.items)
  }

  const toggleComplition = async (todoId) => {
    const todo = todos.find(todo => todo.id === todoId)
    todo.isCompleted = !todo.isCompleted
    const updatedTodo = await API.graphql(graphqlOperation(UpdateTodo, { input: todo }))
  }


  return (
    <div className="App">
      {todos.map(todo => <p key={todo.id} onClick={() => toggleComplition(todo.id)}>{todo.title}</p>)}
    </div>
  );
}

export default App;
