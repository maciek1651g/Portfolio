import styles from "./style.module.css";
import React from "react";
import pl from "./../languages/pl";
import en from "./../languages/en";
import { useLocation, useParams } from "react-router";
import ArrowUpButton from "./Assets/ArrowUpButton";
import Header from "./Header";
import Footer from "./Footer";
import Introduction from "./Introduction";
import WhiteSection from "./Assets/WhiteSection";
import BlackSection from "./Assets/BlackSection";

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

            <WhiteSection
                imgSrc={"portfolio/img/xamarin.jpg"}
                projectTitle={language.titleProject1}
                projectDescription={language.descriptionProject1}
                linkToProjectText={language.linkToProjectText}
                linkToProject={"https://github.com/maciek1651g/inwentaryzacja"}
                linkToProjectButtonText={language.linkToProject1ButtonText}
            />

            <BlackSection
                imgSrc={"portfolio/img/memory.jpg"}
                projectTitle={language.titleProject2}
                projectDescription={language.descriptionProject2}
                linkToProjectText={language.linkToProjectText}
                linkToProject={"https://github.com/maciek1651g/memory"}
                linkToProjectButtonText={language.linkToProject2ButtonText}
                linkToAppProjectText={language.linkToGameProject2}
                linkToAppProject={"http://memory.42web.io/"}
                linkToAppProjectButtonText={language.linkToGameButtonTextProject2}
            />

            <WhiteSection
                imgSrc={"portfolio/img/github.png"}
                projectTitle={language.titleProject3}
                projectDescription={language.descriptionProject3}
                linkToProjectText={language.linkToProjectText}
                linkToProject={"https://github.com/maciek1651g/repos_github"}
                linkToProjectButtonText={language.linkToProject3ButtonText}
                linkToAppProjectText={language.linkToAppProject3}
                linkToAppProject={"https://maciek1651g-github-repos.herokuapp.com/"}
                linkToAppProjectButtonText={language.linkToAppButtonTextProject3}
            />

            <Footer language={language} />
            <ArrowUpButton isVisible={returnTopButton} />
        </>
    );
};

export default MainPage;
