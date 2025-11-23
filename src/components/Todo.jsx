import React from 'react'
import styles from "./Todo.module.css";

const Todo = ({todo , removeTodo , completeTodo}) => {
  return (
    <div className={styles.todo} style={{textDecoration : todo.isCompleted ? "line-through" : ""}}>
           <div className ="content">
<p className={styles.text}>{todo.text}</p>
           </div>
           <div>
            <button className={styles.complete} onClick={() => completeTodo(todo.id)}>Completo</button>
            <button className={styles.remove} onClick={() => removeTodo(todo.id)}>x</button>
           </div>
         </div>
  )
}

export default Todo