import styles from "../style.module.css";
import React from "react";
import { Button } from "@mui/material";

const BlackSection = ({
    imgSrc,
    projectTitle,
    projectDescription,
    linkToProjectText,
    linkToProjectButtonText,
    linkToProject,
    linkToAppProjectText,
    linkToAppProject,
    linkToAppProjectButtonText,
}) => {
    return (
        <div className={styles.sectionBlackMiddle}>
            <div className={styles.contentBlack}>
                <div className={styles.projectContainer}>
                    <div className={styles.project}>
                        <div className={styles.projectDescription}>
                            <h2>{projectTitle}</h2>
                            <p>{projectDescription}</p>

                            {linkToProjectText && (
                                <>
                                    <h3>{linkToProjectText}</h3>
                                    <Button
                                        href={linkToProject}
                                        variant="contained"
                                        size="large"
                                    >
                                        {linkToProjectButtonText}
                                    </Button>
                                </>
                            )}

                            {linkToAppProjectText && (
                                <>
                                    <h3>{linkToAppProjectText}</h3>
                                    <Button
                                        href={linkToAppProject}
                                        variant="contained"
                                        size="large"
                                    >
                                        {linkToAppProjectButtonText}
                                    </Button>
                                </>
                            )}
                        </div>
                        <div className={styles.projectImgContainer}>
                            <div className={styles.projectImg}>
                                <div className={styles.projectImgContent}>
                                    <img
                                        src={imgSrc}
                                        alt="app_project"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlackSection;
