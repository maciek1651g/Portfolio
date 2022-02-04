import React from "react";
import pl from "./../languages/pl";
import en from "./../languages/en";
import ArrowUpButton from "./Assets/ArrowUpButton";
import Header from "./Header";
import Footer from "./Footer";
import Introduction from "./Introduction";
import WhiteSection from "./Assets/WhiteSection";
import BlackSection from "./Assets/BlackSection";

const MainPage = () => {
    const $ = (id) => document.getElementById(id);

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

    const toggleLanguage = () => {
        const htmlTag = $("html");

        if (language === pl) {
            setLanguage(en);
            htmlTag.lang = "en";
        } else {
            setLanguage(pl);
            htmlTag.lang = "pl";
        }
    };

    const [returnTopButton, setReturnTopButton] = React.useState(false);
    const [language, setLanguage] = React.useState(pl);

    return (
        <>
            <Header language={language} toggleLanguage={toggleLanguage} />

            <Introduction language={language} />

            <WhiteSection
                imgSrc={"img/xamarin.jpg"}
                projectTitle={language.titleProject1}
                projectDescription={language.descriptionProject1}
                linkToProjectText={language.linkToProjectText}
                linkToProject={"https://github.com/maciek1651g/inwentaryzacja"}
                linkToProjectButtonText={language.linkToProject1ButtonText}
            />

            <BlackSection
                imgSrc={"img/github.png"}
                projectTitle={language.titleProject3}
                projectDescription={language.descriptionProject3}
                linkToProjectText={language.linkToProjectText}
                linkToProject={"https://github.com/maciek1651g/repos_github"}
                linkToProjectButtonText={language.linkToProject3ButtonText}
                linkToAppProjectText={language.linkToAppProject3}
                linkToAppProject={"https://maciek1651g-github-repos.herokuapp.com/"}
                linkToAppProjectButtonText={language.linkToAppButtonTextProject3}
            />

            <WhiteSection
                imgSrc={"img/puzzleGame.jpg"}
                projectTitle={language.titleProject4}
                projectDescription={language.descriptionProject4}
                linkToProjectText={language.linkToProject4Text}
                linkToProject={"https://github.com/maciek1651g/puzzleGame"}
                linkToProjectButtonText={language.linkToProject4ButtonText}
                linkToAppProjectText={language.linkToAppProject4}
                linkToAppProject={"https://maciek1651g.github.io/puzzleGame/"}
                linkToAppProjectButtonText={language.linkToAppButtonTextProject4}
            />

            <BlackSection
                imgSrc={"img/flashcardMenager2.jpg"}
                projectTitle={language.titleProject5}
                projectDescription={language.descriptionProject5}
                linkToProjectText={language.linkToProject5Text}
                linkToProject={
                    "https://github.com/maciek1651g/zapamietywarka-wiszek"
                }
                linkToProjectButtonText={language.linkToProject5ButtonText}
                linkToAppProjectText={language.linkToAppProject5}
                linkToAppProject={"https://menager-fiszek.herokuapp.com/"}
                linkToAppProjectButtonText={language.linkToAppButtonTextProject5}
            />

            <WhiteSection
                imgSrc={"img/memory.jpg"}
                projectTitle={language.titleProject2}
                projectDescription={language.descriptionProject2}
                linkToProjectText={language.linkToProjectText}
                linkToProject={"https://github.com/maciek1651g/memory"}
                linkToProjectButtonText={language.linkToProject2ButtonText}
                linkToAppProjectText={language.linkToGameProject2}
                linkToAppProject={"http://memory.42web.io/"}
                linkToAppProjectButtonText={language.linkToGameButtonTextProject2}
            />

            <Footer language={language} />
            <ArrowUpButton isVisible={returnTopButton} />
        </>
    );
};

export default MainPage;
