import styles from "./task.module.css"
import { TbTrash } from "react-icons/tb"

export function Task() {
    return (
        <div className={styles.taskContainer}>
            <button>
                <div />
            </button>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, repudiandae.</p>
            <button className={styles.deleteTask}>
                <TbTrash size={20} />
            </button>
        </div>
    )
}