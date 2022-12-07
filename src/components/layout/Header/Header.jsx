import { HomeLink, LogoLink } from "../Menu"
import "./Header.css"
const Header =()=>{
return (
    <>
    <nav>
        <p><LogoLink/></p>
        <ul>
            <li><HomeLink/></li>
            <li>GALLERY</li>
            <li>SHOP</li>
            <li>ABOUT ME</li>
            <li>CONTACT</li>
        </ul>
    </nav>
    </>
)
    
}

export default Header