import AppProvider from "../context/appContext";
import Router from "../router/router";
import '../styles/global.scss'

const App = () => {
    return(
        <div className="app">
            <AppProvider>
                <Router/>
            </AppProvider>
        </div>
    )
}
export default App;