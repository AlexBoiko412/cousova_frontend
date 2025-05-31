import {NavLink, useNavigate} from "react-router-dom";
import classes from "./Navbar.module.css"
import {cn} from "../utils/cn.ts";

const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
        "relative text-light hover:text-gray-300",
        isActive && classes.active__link
    );

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className={classes.navbar}>
            <div
                className={cn(classes.navbar__logo, " cursor-pointer")}
                onClick={() => navigate("/")}
            >
                <span className={"text-3xl leading-6  tracking-wide"}>LUXURY</span>
                <span className={"text-[12px] leading-none tracking-[0.5em]"}>HOTELS</span>
            </div>
            <ul className={classes.navbar__list}>
                <li><NavLink to={"/"} className={navLinkClasses}>Home</NavLink></li>
                <li><NavLink to={"/rooms"} className={navLinkClasses}>Rooms</NavLink></li>
                <li><NavLink to={"/about"} className={navLinkClasses}>About</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;