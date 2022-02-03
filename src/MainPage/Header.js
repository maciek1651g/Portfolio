import styles from "./style.module.css";
import React from "react";
import pl from "../languages/pl";
import { useHistory } from "react-router";
import { Button, Stack } from "@mui/material";

const Header = ({ language }) => {
    const history = useHistory();

    const changeLanguage = () => {
        if (language === pl) {
            history.push("/en");
        } else {
            history.push("/pl");
        }
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    };

    return (
        <div className={styles.sectionHeader}>
            <header className={styles.header}>
                <h1>Maciej Dominiak</h1>
                <Stack direction="row" spacing={2}>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={scrollToBottom}
                    >
                        {language.contact}
                    </Button>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={changeLanguage}
                    >
                        {language.changeLanguageText}
                    </Button>
                </Stack>
            </header>
        </div>
    );
};

export default Header;
