import {BrowserRouter,Route,Routes} from "react-router-dom"
import Layout from "../layout/Layout"
import HomePage from "./homePage/HomePage"
const SiteRouter = ()=>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}></Route>

            </Route>
        </Routes>
        
        </BrowserRouter>
    )
}

export default SiteRouter