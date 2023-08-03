import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
function Header() {
    return (
        <header className="headerContainer">
            <div className="headerImgBox">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Running man logo "
                        className="headerImg"
                    />
                </Link>
            </div>
            <nav className="headerNav">
                <ul className="headerList">
                    <li className="headerListItem">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className="headerListItem">Profil</li>
                    <li className="headerListItem">Réglage</li>
                    <li className="headerListItem">Communauté</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
