import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={"navbar"}>
            <div className={"navbar__logo"}>
                <span className={"text-xl"}>LUXURY</span>
                <span className={"text-[10px]"}>HOTELS</span>
            </div>
            <ul className={"navbar__list"}>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/rooms"}>Rooms</Link></li>
                <li><Link to={"/about"}>About</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;