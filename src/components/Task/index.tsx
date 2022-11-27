import styles from "./task.module.css"
import { TbTrash } from "react-icons/tb"
import { ITask } from "../../App";
import { BsFillCheckCircleFill } from "react-icons/bs"

interface Props {
    task: ITask;
    onDeleteTask: (taskId: string) => void;
    onCompleteTask: (taskId: string) => void;
}

export function Task({ task, onDeleteTask, onCompleteTask }: Props) {

    return (
        <div className={styles.taskContainer}>
            <button onClick={() => onCompleteTask(task.id)}>
                {task.isDone ? <BsFillCheckCircleFill /> : <div />}
            </button>
            <p className={task.isDone ? styles.textCompletedTask : ""}>{task.content}</p>
            <button className={styles.deleteTask} onClick={() => onDeleteTask(task.id)}>
                <TbTrash size={20} />
            </button>
        </div>
    )
}