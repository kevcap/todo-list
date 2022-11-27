import { ITask } from "../../App"
import { Task } from "../Task"
import styles from "./tasks.module.css"

interface Props {
    tasks: ITask[];
    onDeleteTask: (taskId: string) => void;
    onCompleteTask: (taskId: string) => void;
}

export function Tasks({ tasks, onDeleteTask, onCompleteTask }: Props) {
    const createdTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.isDone).length

    return (
        <section className={styles.tasks}>
            <header>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{createdTasks}</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Concluidas</p>
                    <span>{completedTasks} de {createdTasks}</span>
                </div>
            </header>

            <div className={styles.taskList}>
                {tasks.map((task) => (<Task key={task.id} task={task} onDeleteTask={onDeleteTask} onCompleteTask={onCompleteTask} />))}
            </div>
        </section>
    )
}