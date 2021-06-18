import styles from './style.module.css';
import React from "react";
import pl from "./../languages/pl"
import en from "./../languages/en"
import {useHistory, useLocation, useParams} from "react-router";

const MainPage = () => {
    const $ = id=>document.getElementById(id);
    const {lang} = useParams();
    const history = useHistory();
    const location = useLocation();

    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }

    const returnToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    React.useEffect(() => {
        window.onscroll = () => {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                if(returnTopButton===false)
                {
                    setReturnTopButton(true);
                }
            } else {
                if(returnTopButton===true)
                {
                    setReturnTopButton(false);
                }
            }
        }
    });

    React.useEffect(() => {
        setLang(lang);
    }, [location]);

    const setLang = (lang) => {
        const htmlTag =  $("html");
        switch (lang)
        {
            case "en":
                setLanguage(en);
                htmlTag.lang="en";
                break;
            default:
                setLanguage(pl);
                htmlTag.lang="pl";
        }
    }

    const changeLanguage = () => {
        if(language===pl) {
            history.push("/en");
        } else {
            history.push("/pl");
        }
    }

    const [returnTopButton, setReturnTopButton] = React.useState(false);
    const [language, setLanguage] = React.useState(pl);


    return (
        <>
            <div className={styles.sectionHeader}>
                <header className={styles.header}>
                    <h1>Maciej Dominiak</h1>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div className={styles.contactButton} onClick={scrollToBottom}>
                            <span>
                                {language.contact}
                            </span>
                        </div>
                        <div className={styles.contactButton} onClick={changeLanguage}>
                            {language.changeLanguageText}
                        </div>
                    </div>

                </header>
            </div>

            <div className={styles.sectionBlackBottom}>
                <div className={styles.contentBlack}>
                    <div className={styles.helloContainer}>
                        <div className={styles.hello}>
                            <p style={{fontSize: "50px", color: "white"}}>Portfolio</p>
                            <p style={{fontSize: "20px", color: "#ABABAB"}}>
                                {language.description}
                            </p>
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
                                    <div className={styles.projectImgContent} >
                                        <img src="/img/xamarin.jpg" alt="app_project"/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.projectDescription}>
                                <h2>{language.titleProject1}</h2>
                                <p>
                                    {language.descriptionProject1}
                                </p>
                                <h3>{language.linkToProjectText}</h3>
                                <a href="https://github.com/maciek1651g/inwentaryzacja">
                                    <div className={styles.projectLink}>{language.linkToProject1ButtonText}</div>
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
                                <p>
                                    {language.descriptionProject2}
                                </p>
                                <h3>{language.linkToProjectText}</h3>
                                <a href="https://github.com/maciek1651g/memory">
                                    <div className={styles.projectLink}>{language.linkToProject2ButtonText}</div>
                                </a>
                                <h3>{language.linkToGameProject2}</h3>
                                <a href="http://memory.42web.io/">
                                    <div className={styles.projectLink}>{language.linkToGameButtonTextProject2}</div>
                                </a>
                            </div>
                            <div className={styles.projectImgContainer}>
                                <div className={styles.projectImg}>
                                    <div className={styles.projectImgContent} >
                                        <img src="/img/memory.jpg" alt="app_project"/>
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
                                    <div className={styles.projectImgContent} >
                                        <img src="/img/github.png" alt="app_project"/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.projectDescription}>
                                <h2>{language.titleProject3}</h2>
                                <p>
                                    {language.descriptionProject3}
                                </p>
                                <h3>{language.linkToProjectText}</h3>
                                <a href="https://github.com/maciek1651g/repos_github">
                                    <div className={styles.projectLink}>{language.linkToProject3ButtonText}</div>
                                </a>
                                <h3>{language.linkToAppProject3}</h3>
                                <a href="https://maciek1651g-github-repos.herokuapp.com/">
                                    <div className={styles.projectLink}>{language.linkToAppButtonTextProject3}</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className={styles.sectionBlackTop}>
                <div className={styles.contentBlack}>
                    <div className={styles.helloContainer}>
                        <div className={styles.hello}>
                            <p style={{fontSize: "50px", margin: "0", color: "white"}}>{language.contact}</p>
                            <ul style={{fontSize: "20px", color: "#ABABAB", listStyleType: "none"}}>
                                <li className={styles.li}>Email: <a href="mailto:maciek1651g@gmail.com">maciek1651g@gmail.com</a></li>
                                <li className={styles.li}>Github: <a href="https://github.com/maciek1651g">github.com/maciek1651g</a></li>
                                <li className={styles.li}>Linkedin: <a href="https://www.linkedin.com/in/maciej-dominiak-b2a99a149/">linkedin.com/maciej-dominiak</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.hello} style={{height: "100%"}}>
                        <p style={{margin: "0"}}>&copy; 2021 Maciej Dominiak. {language.rights}</p>
                    </div>
                </div>
            </div>

            {returnTopButton?
            <div className={styles.toTopButton} onClick={returnToTop}>
                <p>{language.toTopTextButton}</p>
            </div>
            :null}

        </>
    )
}

export default MainPage