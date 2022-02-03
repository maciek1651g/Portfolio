import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./MainPage/MainPage";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#E7E7E7",
            paper: "#FFFFFA",
        },
        primary: {
            main: "#4B6CC1",
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <MainPage />
                        </Route>
                        <Route path="/:lang">
                            <MainPage />
                        </Route>
                    </Switch>
                </Router>
            </Fragment>
        </ThemeProvider>
    );
};

export default App;
