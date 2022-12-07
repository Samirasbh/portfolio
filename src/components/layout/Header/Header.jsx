
import { AboutPage, GalleryPage, HomeLink, LogoLink } from "../Menu"
import "./Header.css"
const Header =()=>{
return (
    <>
    <nav>
        <p><LogoLink/></p>
        <ul>
            <li><HomeLink/></li>
            <li><GalleryPage/></li>
            <li><AboutPage/></li>
            <li>CONTACT</li>
        </ul>
    </nav>
    </>
)
    
}

export default Header