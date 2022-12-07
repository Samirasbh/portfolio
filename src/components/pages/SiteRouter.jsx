import {BrowserRouter,Route,Routes} from "react-router-dom"
import Layout from "../layout/Layout"
import About from "./About/About"
import Gallery from "./Gallery/Gallery"
import HomePage from "./homePage/HomePage"
const SiteRouter = ()=>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}></Route>
            <Route path="gallery" element={<Gallery/>}></Route>
            <Route path ="about" element={<About/>}></Route>

            </Route>
        </Routes>
        
        </BrowserRouter>
    )
}

export default SiteRouter