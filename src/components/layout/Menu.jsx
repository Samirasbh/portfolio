import {Link} from "react-router-dom"

const style={
    textDecoration : "none",
    color : "inherit"
}

const LogoLink =()=> <Link to="/" style={style}>skyART</Link>
const HomeLink = () => <Link to="/" style={style}>Home</Link>;
const AboutPage = () => <Link to="about" style={style}>About Me</Link>;
const ContactPage = () => <Link to="contact" style={style}>Contact</Link>;
const GalleryPage = () => <Link to="gallery" style={style}>Gallery</Link>;
const ShopPage = () => <Link to="shop" style={style}>Shop</Link>;

export {LogoLink,HomeLink,AboutPage,ContactPage,GalleryPage,ShopPage}