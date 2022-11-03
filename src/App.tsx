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

  function handleDeleteTask(taskId: string) {

    const tasksWithoutTheDeletedOne = tasks.filter(task => task.id !== taskId)

    setTasks(tasksWithoutTheDeletedOne)

  }

  function handleNewTaskInvalid() {

  }


  return (
    <>
      <Header onAddTask={handleAddNewTask} />
      <Tasks tasks={tasks} onDeleteTask={handleDeleteTask} />
    </>
  )
}

export default App
