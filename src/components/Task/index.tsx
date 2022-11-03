import styles from "./task.module.css"
import { TbTrash } from "react-icons/tb"
import { ITask } from "../../App";

interface Props {
    task: ITask;
    onDeleteTask: (taskId: string) => void;
}

export function Task({ task, onDeleteTask }: Props) {
    return (
        <div className={styles.taskContainer}>
            <button>
                <div />
            </button>
            <p>{task.content}</p>
            <button className={styles.deleteTask} onClick={() => onDeleteTask(task.id)}>
                <TbTrash size={20} />
            </button>
        </div>
    )
}