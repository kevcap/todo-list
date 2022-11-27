import { useState } from "react"
import { Header } from "./components/header"
import { Tasks } from "./components/Tasks"
import { v4 as uuidv4 } from 'uuid';

export interface ITask {
  id: string,
  content: string,
  isDone: boolean
}

function App() {

  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleAddNewTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        content: taskTitle,
        isDone: false
      }
    ])

  }

  function handleDeleteTask(taskId: string) {

    const tasksWithoutTheDeletedOne = tasks.filter(task => task.id !== taskId)

    setTasks(tasksWithoutTheDeletedOne)

  }

  function handleChangeTaskStatus(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isDone: !task.isDone,
        }
      }
      return task;
    })
    setTasks(newTasks)
  }


  return (
    <>
      <Header onAddTask={handleAddNewTask} />
      <Tasks tasks={tasks} onDeleteTask={handleDeleteTask} onCompleteTask={handleChangeTaskStatus} />
    </>
  )
}

export default App
