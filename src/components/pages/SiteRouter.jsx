import {BrowserRouter,Route,Routes} from "react-router-dom"
import Layout from "../layout/Layout"
import { GalleryPage } from "../layout/Menu"
import Gallery from "./Gallery/Gallery"
import HomePage from "./homePage/HomePage"
const SiteRouter = ()=>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}></Route>
            <Route path="gallery" element={<Gallery/>}></Route>

            </Route>
        </Routes>
        
        </BrowserRouter>
    )
}

export default SiteRouter