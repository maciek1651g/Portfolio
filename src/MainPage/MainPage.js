import styles from "./style.module.css";
import React from "react";
import pl from "./../languages/pl";
import en from "./../languages/en";
import { useLocation, useParams } from "react-router";
import ArrowUpButton from "./Assets/ArrowUpButton";
import Header from "./Header";
import Footer from "./Footer";
import Introduction from "./Introduction";

const MainPage = () => {
    const $ = (id) => document.getElementById(id);
    const { lang } = useParams();
    const location = useLocation();

    React.useEffect(() => {
        const onScroll = () => {
            if (window.pageYOffset > 300) {
                setReturnTopButton(true);
            } else {
                setReturnTopButton(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    React.useEffect(() => {
        setLang(lang);
    }, [location]);

    const setLang = (lang) => {
        const htmlTag = $("html");
        switch (lang) {
            case "en":
                setLanguage(en);
                htmlTag.lang = "en";
                break;
            default:
                setLanguage(pl);
                htmlTag.lang = "pl";
        }
    };

    const [returnTopButton, setReturnTopButton] = React.useState(false);
    const [language, setLanguage] = React.useState(pl);

    return (
        <>
            <Header language={language} />

            <Introduction language={language} />

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

            <div className={styles.sectionBlackMiddle}>
                <div className={styles.contentBlack}>
                    <div className={styles.projectContainer}>
                        <div className={styles.project}>
                            <div className={styles.projectDescription}>
                                <h2>{language.titleProject2}</h2>
                                <p>{language.descriptionProject2}</p>
                                <h3>{language.linkToProjectText}</h3>
                                <a href="https://github.com/maciek1651g/memory">
                                    <div className={styles.projectLink}>
                                        {language.linkToProject2ButtonText}
                                    </div>
                                </a>
                                <h3>{language.linkToGameProject2}</h3>
                                <a href="http://memory.42web.io/">
                                    <div className={styles.projectLink}>
                                        {language.linkToGameButtonTextProject2}
                                    </div>
                                </a>
                            </div>
                            <div className={styles.projectImgContainer}>
                                <div className={styles.projectImg}>
                                    <div className={styles.projectImgContent}>
                                        <img
                                            src="img/memory.jpg"
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

            <div className={styles.sectionWhite}>
                <div className={styles.contentWhite}>
                    <div className={styles.projectContainer}>
                        <div className={styles.project}>
                            <div className={styles.projectImgContainer}>
                                <div className={styles.projectImg}>
                                    <div className={styles.projectImgContent}>
                                        <img
                                            src="img/github.png"
                                            alt="app_project"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.projectDescription}>
                                <h2>{language.titleProject3}</h2>
                                <p>{language.descriptionProject3}</p>
                                <h3>{language.linkToProjectText}</h3>
                                <a href="https://github.com/maciek1651g/repos_github">
                                    <div className={styles.projectLink}>
                                        {language.linkToProject3ButtonText}
                                    </div>
                                </a>
                                <h3>{language.linkToAppProject3}</h3>
                                <a href="https://maciek1651g-github-repos.herokuapp.com/">
                                    <div className={styles.projectLink}>
                                        {language.linkToAppButtonTextProject3}
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer language={language} />
            <ArrowUpButton isVisible={returnTopButton} />
        </>
    );
};

export default MainPage;
