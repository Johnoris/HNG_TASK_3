import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../pages/home'
import SearchPage from '../pages/searchPage'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/search' element={<SearchPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;