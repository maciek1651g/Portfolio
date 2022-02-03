import styles from "../style.module.css";
import React from "react";

const WhiteSection = ({
    ptojectTitle,
    projectDescription,
    linkToProjectText,
    linkToProjectButtonText,
}) => {
    return (
        <div className={styles.sectionWhite}>
            <div className={styles.contentWhite}>
                <div className={styles.projectContainer}>
                    <div className={styles.project}>
                        <div className={styles.projectImgContainer}>
                            <div className={styles.projectImg}>
                                <div className={styles.projectImgContent}>
                                    <img
                                        src="img/xamarin.jpg"
                                        alt="app_project"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.projectDescription}>
                            <h2>{language.titleProject1}</h2>
                            <p>{language.descriptionProject1}</p>
                            <h3>{language.linkToProjectText}</h3>
                            <a href="https://github.com/maciek1651g/inwentaryzacja">
                                <div className={styles.projectLink}>
                                    {language.linkToProject1ButtonText}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhiteSection;
