import styles from "./tasks.module.css"

export function Tasks() {
    return (
        <section className={styles.tasks}>
            <header>
                <div>
                    <p>Tarefas criadas</p>
                    <span>8</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Concluidas</p>
                    <span>5 de 8</span>
                </div>
            </header>
        </section>
    )
}