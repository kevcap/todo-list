import styles from "./tasks.module.css"

export function Task() {
    return (
        <section>
            <header>
                <div>
                    <p>Tarefas criadas</p>
                    <span>8</span>
                </div>
                <div>
                    <p>Concluidas</p>
                    <span>5 de 8</span>
                </div>
            </header>
        </section>
    )
}