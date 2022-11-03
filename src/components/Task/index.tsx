import styles from "./task.module.css"
import { TbTrash } from "react-icons/tb"
import { ITask } from "../../App";

interface Props {
    task: ITask;
}

export function Task({ task }: Props) {
    return (
        <div className={styles.taskContainer}>
            <button>
                <div />
            </button>
            <p>{task.content}</p>
            <button className={styles.deleteTask}>
                <TbTrash size={20} />
            </button>
        </div>
    )
}