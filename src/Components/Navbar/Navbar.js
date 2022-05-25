import { Link } from "react-router-dom";
import "./Navbar.css";



const Navbar = (props) => {
    return (
        <nav>
            <Link to="/">LISTE</Link>
            <Link to="/stateanim">STATE</Link>
            <Link to="/scroll">SCROLL</Link>
        </nav>
    );
};

export default Navbar;