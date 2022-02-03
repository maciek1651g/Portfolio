import styles from "./style.module.css";
import React from "react";

const Footer = ({ language }) => {
    return (
        <div className={styles.sectionBlackTop}>
            <div className={styles.contentBlack}>
                <div className={styles.helloContainer}>
                    <div className={styles.hello}>
                        <p
                            style={{
                                fontSize: "50px",
                                margin: "0",
                                color: "white",
                            }}
                        >
                            {language.contact}
                        </p>
                        <ul
                            style={{
                                fontSize: "20px",
                                color: "#ABABAB",
                                listStyleType: "none",
                                padding: "0",
                            }}
                        >
                            <li className={styles.li}>
                                Email:{" "}
                                <a href="mailto:maciek1651g@gmail.com">
                                    maciek1651g@gmail.com
                                </a>
                            </li>
                            <li className={styles.li}>
                                Github:{" "}
                                <a href="https://github.com/maciek1651g">
                                    github.com/maciek1651g
                                </a>
                            </li>
                            <li className={styles.li}>
                                Linkedin:{" "}
                                <a href="https://www.linkedin.com/in/maciej-dominiak-b2a99a149/">
                                    linkedin.com/maciej-dominiak
                                </a>{" "}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.hello} style={{ height: "100%" }}>
                    <p style={{ margin: "0" }}>
                        &copy; 2021 Maciej Dominiak. {language.rights}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
