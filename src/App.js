import { Route, Switch } from "react-router-dom";

import { Footer, Navbar } from "./Layout";
import MainSection from "./MainSection";
import MovieDetailsSection from "./MovieDetailsSection"

const App = () => {
    return (
        <>
            <Navbar appName="Movies App" />
            <Switch>
                <Route exact path="/" component={MainSection} />
                <Route path="/:imdb" component={MovieDetailsSection} />
            </Switch>
            <Footer />
        </>
    )
}

export default App;