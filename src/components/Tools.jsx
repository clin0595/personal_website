import styles from "./Tools.module.css";

function Tools({tools, toolboxColor}) {
    return (
        <div className={styles.toolCards}>
            {tools.map((tool, index) => {
                            return (
                                <div 
                                    key={index} 
                                    className={styles.toolBox}
                                    style={{ '--tool-color': toolboxColor }}
                                >
                                    {tool}
                                </div>
                            )
            })}
        </div>

    )

}

export default Tools;