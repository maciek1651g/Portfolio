import styles from './style.module.css';

const MainPage = () => {
    return (
        <>
            <div className={styles.sectionHeader}>
                <header className={styles.header}>
                    <h1>Maciej Dominiak</h1>
                    <nav style={{display: "flex"}}>
                        <div>Projekty</div>
                        <div>Kontakt</div>
                    </nav>
                </header>
            </div>

            <div className={styles.sectionBlackBottom}>
                <div className={styles.contentBlack}>
                    <div className={styles.helloContainer}>
                        <div className={styles.hello}>
                            <p style={{fontSize: "50px"}}>Portfolio</p>
                            <p style={{fontSize: "20px", color: "#ABABAB"}}>
                                Jestem studentem Szkoły Głównej Gospodarstwa Wiejskiego w Warszawie na kierunku Informatyka. Moją pasją jest programowanie. W przyszłości zamierzam rozwijać swoją wiedzę w tej dziedzinie tworząc coraz to nowsze projekty. Stworzyłem tą stronę by każdy mógł zobaczyć najciekawsze projekty, w których uczestniczyłem, bądź w całości wykonałem sam.
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
                                        <img src="./img/xamarin.jpg" alt="app_project"/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.projectDescription}>
                                <h2>Aplikacja mobilna</h2>
                                <p>
                                    Projekt wykonany grupowo, w 16 osób, na zajęcia z Inżynierii Oprogramowania. Aplikacja służy do inwentaryzacji środków trwałych i potrafi, za pomocą kamery, odczytywać kody QR umieszczone na inwentaryzowanych przedmiotach oraz wyszukiwać o nich informację w bazie danych. Aplikacja została napisana w technologii Xamarin. W tym projekcie przypadło mi napisanie widoku skanowania, na którym został umieszczony podgląd z kamerki. Napisałem również część kodu odpowiedzialną za komunikację z API, w celu wysyłania i pobierania informacji do/z bazy danych.
                                </p>
                                <h3>Link do projektu</h3>
                                <a href="https://github.com/maciek1651g/inwentaryzacja"><div className={styles.projectLink}>Projekt aplikacji mobilnej</div></a>
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
                                <h2>Aplikacja mobilna</h2>
                                <p>
                                    Projekt wykonany grupowo, w 16 osób, na zajęcia z Inżynierii Oprogramowania. Aplikacja służy do inwentaryzacji środków trwałych i potrafi, za pomocą kamery, odczytywać kody QR umieszczone na inwentaryzowanych przedmiotach oraz wyszukiwać o nich informację w bazie danych. Aplikacja została napisana w technologii Xamarin. W tym projekcie przypadło mi napisanie widoku skanowania, na którym został umieszczony podgląd z kamerki. Napisałem również część kodu odpowiedzialną za komunikację z API, w celu wysyłania i pobierania informacji do/z bazy danych.
                                </p>
                                <h3>Link do projektu</h3>
                                <a href="https://github.com/maciek1651g/inwentaryzacja"><div className={styles.projectLink}>Projekt aplikacji mobilnej</div></a>
                            </div>
                            <div className={styles.projectImgContainer}>
                                <div className={styles.projectImg}>
                                    <div className={styles.projectImgContent} >
                                        <img src="./img/xamarin.jpg" alt="app_project"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.sectionBlackTop}>
                <div className={styles.contentBlack}>
                    <div className={styles.helloContainer}>
                        <div className={styles.hello}>
                            <p style={{fontSize: "50px"}}>Portfolio</p>
                            <p style={{fontSize: "20px", color: "#ABABAB"}}>
                                Jestem studentem Szkoły Głównej Gospodarstwa Wiejskiego w Warszawie na kierunku Informatyka. Moją pasją jest programowanie. W przyszłości zamierzam rozwijać swoją wiedzę w tej dziedzinie tworząc coraz to nowsze projekty. Stworzyłem tą stronę by każdy mógł zobaczyć najciekawsze projekty, w których uczestniczyłem, bądź w całości wykonałem sam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage