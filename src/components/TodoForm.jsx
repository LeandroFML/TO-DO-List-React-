import {useState} from 'react'
import styles from "./TodoForm.module.css";


const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return
        addTodo(value)
        setValue("")
        
    }
  return (
<div className={styles.form}>
        <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input className={styles.input}  type="text" placeholder='Texto da tarefa' 
            value= {value}
            onChange={(e) => setValue(e.target.value)} />

            <button className={styles.button} type='submit'>Adicionar</button>
        </form>
    </div>
  )
}

export default TodoForm