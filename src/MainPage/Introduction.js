import styles from "./style.module.css";
import React from "react";

const Introduction = ({ language }) => {
    return (
        <div className={styles.sectionBlackBottom}>
            <div className={styles.contentBlack}>
                <div className={styles.helloContainer}>
                    <div className={styles.hello}>
                        <p style={{ fontSize: "50px", color: "white" }}>Portfolio</p>
                        <p style={{ fontSize: "20px", color: "#ABABAB" }}>
                            {language.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
