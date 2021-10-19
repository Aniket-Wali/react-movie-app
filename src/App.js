import { Footer, Navbar } from "./Layout";
import MainSection from "./MainSection";

const App = () => {
    return (
        <>
            <Navbar appName="Movies App" />
            <MainSection />
            <Footer />
        </>
    )
}

export default App;