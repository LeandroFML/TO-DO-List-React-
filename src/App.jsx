import styles from "./App.module.css";
import {useState} from 'react';
import Todo from './components/todo.jsx';
import TodoForm from './components/TodoForm.jsx';


export function App(){
  const [todos , setTodos] = useState([
    {
      id:1,
      text: "criar funcionalidade x no sistema",
     
    },
    {
      id:2,
      text: "Ir pra academia",
      
    },
    {
      id:3,
      text: "Estudar React",
      
    }

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

  const completed = todos.filter(todo => todo.isCompleted).length;



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