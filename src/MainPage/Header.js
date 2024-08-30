import styles from "./style.module.css";
import React from "react";
import { Button, Stack } from "@mui/material";

const Header = ({ language, toggleLanguage }) => {
    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    };

    return (
        <div className={styles.sectionHeader}>
            <header className={styles.header}>
                <h1 className={styles.headerName}>Maciej Dominiak</h1>
                <Stack direction="row" spacing={2}>
                    <Button
                        variant="contained"
                        size="medium"
                        onClick={scrollToBottom}
                    >
                        {language.contact}
                    </Button>
                    <Button
                        variant="contained"
                        size="medium"
                        onClick={toggleLanguage}
                    >
                        {language.changeLanguageText}
                    </Button>
                </Stack>
            </header>
        </div>
    );
};

export default Header;
