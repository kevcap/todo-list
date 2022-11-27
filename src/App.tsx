import { useState, useEffect } from "react"
import { Header } from "./components/header"
import { Tasks } from "./components/Tasks"
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = "todo_project:saved_tasks"

export interface ITask {
  id: string,
  content: string,
  isDone: boolean
}

function App() {

  const [tasks, setTasks] = useState<ITask[]>([]);

  function setTasksLocally(newTasks: ITask[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  function getTasksSavedLocally() {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }

  useEffect(() => {
    getTasksSavedLocally()
  }, [])

  function handleAddNewTask(taskTitle: string) {
    setTasksLocally([
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

    setTasksLocally(tasksWithoutTheDeletedOne)

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
    setTasksLocally(newTasks)
  }


  return (
    <>
      <Header onAddTask={handleAddNewTask} />
      <Tasks tasks={tasks} onDeleteTask={handleDeleteTask} onCompleteTask={handleChangeTaskStatus} />
    </>
  )
}

export default App
