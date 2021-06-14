import styles from './style.module.css';

const MainPage = () => {
    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }

    return (
        <>
            <div className={styles.sectionHeader}>
                <header className={styles.header}>
                    <h1>Maciej Dominiak</h1>
                    <div className={styles.contactButton} onClick={scrollToBottom}>
                        <span>Kontakt</span>
                    </div>
                </header>
            </div>

            <div className={styles.sectionBlackBottom}>
                <div className={styles.contentBlack}>
                    <div className={styles.helloContainer}>
                        <div className={styles.hello}>
                            <p style={{fontSize: "50px", color: "white"}}>Portfolio</p>
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
                                <h2>Gra w memory</h2>
                                <p>
                                    Projekt gry w memory wykonany przy użyciu HTML, CSS, JavaScript i PHP. W grze możemy wybrać tryb klasyczny, bądź tryb w którym pierwsza karta odsłaniana jest w losowy sposób co znacząco utrudnia rozgrywkę. Swój wynik można zapisać w bazie danych.
                                </p>
                                <h3>Link do projektu</h3>
                                <a href="https://github.com/maciek1651g/memory"><div className={styles.projectLink}>Projekt gry na githubie</div></a>
                                <h3>Link do Gry</h3>
                                <a href="http://memory.42web.io/"><div className={styles.projectLink}>Gra w memory</div></a>
                            </div>
                            <div className={styles.projectImgContainer}>
                                <div className={styles.projectImg}>
                                    <div className={styles.projectImgContent} >
                                        <img src="./img/memory.jpg" alt="app_project"/>
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
                                        <img src="./img/github.png" alt="app_project"/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.projectDescription}>
                                <h2>Wyszukiwarka repozytoriów githuba</h2>
                                <p>
                                    Projekt wyszukiwarki repozytoriów w serwisie github, po nazwie użytkownika. Aplikacja pobiera wszystkie repozytoria użytkownika o zadanej nazwie, sortuje je po liczbie gwiazdek i wyświetla na ekran.
                                </p>
                                <h3>Link do projektu</h3>
                                <a href="https://github.com/maciek1651g/repos_github"><div className={styles.projectLink}>Repozytorium projektu</div></a>
                                <h3>Link do aplikacji</h3>
                                <a href="https://maciek1651g-github-repos.herokuapp.com/"><div className={styles.projectLink}>Aplikacja</div></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className={styles.sectionBlackTop}>
                <div className={styles.contentBlack}>
                    <div className={styles.helloContainer}>
                        <div className={styles.hello}>
                            <p style={{fontSize: "50px", margin: "0", color: "white"}}>Kontakt</p>
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
                        <p style={{margin: "0"}}>&copy; 2021 Maciej Dominiak. Wszelkie prawa zastrzeżone</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainPage