import styles from "./App.module.css";
import {useState} from 'react';
import TodoForm from './components/TodoForm.jsx';
import Todo from './components/Todo.jsx';

export function App(){
  const [todos , setTodos] = useState([
 
    
  ])

  const addTodo = (text) => {

    const newTOdos = [...todos,{
    id: Math.floor(Math.random() * 10000),
    text,
    }
  ]

    setTodos(newTOdos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null

     ) 
     setTodos(filteredTodos)
    }

  const completeTodo = (id) => {
    const newTodos = [... todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }


  return(
<div className={styles.app}>
<h1 className={styles.title}>To Do List</h1>
<h2>Total de tarefas: {todos.length}</h2>

<div className={styles.todoList}>
        {todos.map((todo) => (
        <Todo key={todo.id} todo = {todo} completeTodo={completeTodo} removeTodo={removeTodo} />
        
        ))}
      </div>
      <TodoForm addTodo={addTodo} />

    
   


    
   
    </div>
  )
}