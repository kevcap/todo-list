import { useState } from "react"
import { Header } from "./components/header"
import { Tasks } from "./components/Tasks"
import { v4 as uuidv4 } from 'uuid';

export interface ITask {
  id: string,
  content: string,
  done: boolean
}

function App() {

  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleAddNewTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        content: taskTitle,
        done: false
      }
    ])

  }

  function deleteTask(taskId: string) {

    setTasks([
      ...tasks,
    ])

  }

  function handleNewTaskInvalid() {

  }


  return (
    <>
      <Header onAddTask={handleAddNewTask} />
      <Tasks tasks={tasks} />
    </>
  )
}

export default App
