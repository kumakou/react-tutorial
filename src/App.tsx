import React, { useState } from "react"
import { nanoid } from "nanoid"
import "./App.css"
import Todo from "./compornents/Todo"
import Form from "./compornents/Form"

type TodoType = {
  id: string
  name: string
  completed: boolean
}

function App() {
  const [tasks, setTasks] = useState<TodoType[]>([])

  const addTask = (name: string) => {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false }
    setTasks([...tasks, newTask])
  }

  const toggleTaskCompleted = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  const deleteTask = (id: string) => {
    const remainingTasks = tasks.filter((task) => task.id !== id)
    setTasks(remainingTasks)
  }

  const editTaskName = (id: string, newName: string) => {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName }
      }
      return task
    })
    setTasks(editedTaskList)
  }

  return (
    <div className="App">
      <h1>Todoリスト</h1>
      <Form addTask={addTask} />
      {tasks.map((todo: TodoType) => (
        <Todo
          id={todo.id}
          name={todo.name}
          completed={todo.completed}
          toggleTaskCompleted={toggleTaskCompleted}
          deleteTask={deleteTask}
          editTaskName={editTaskName}
        />
      ))}
    </div>
  )
}

export default App
