import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"
import EmailSubscribeInput from "./UI/EmailSubscribeInput.tsx";
import classes from './Footer.module.css'
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <section className={classes.footer}>
            <div>
                <div>
                    <span className={"text-xl leading-4  tracking-wide"}>LUXURY</span>
                    <span className={"text-[6px] leading-none tracking-[0.5em]"}>HOTELS</span>
                </div>
                <p>
                    497 Evergreen Rd. Roseville, CA 95673 <br/>
                    +44 345 678 903 <br/>
                    luxury_hotels@gmail.com <br/>
                </p>
            </div>
            <ul className={classes.footer__list}>
                <li><NavLink to={"/rooms"}>Contact</NavLink></li>
                <li><NavLink to={"/about"}>About Us</NavLink></li>
                <li><NavLink to={"/"}>Terms & Conditions</NavLink></li>
            </ul>

            <ul className={classes.footer__list}>
                <h3 className={"flex w-full gap-2 items-center justify-between"}>
                    <img width={6} src={facebook} alt="facebook"/>
                    <a href="https://www.facebook.com">Facebook</a>
                </h3>
                <h3 className={"flex w-full gap-2 items-center justify-between"}>
                    <img width={10} src={twitter} alt="Twitter"/>
                    <a href="https://www.twitter.com">Twitter</a>
                </h3>
                <h3 className={"flex  w-full gap-2 items-center justify-between"}>
                    <img width={10} src={instagram} alt="Instagram"/>
                    <a href="https://www.instagram.com">Instagram</a>
                </h3>
            </ul>

            <div>
                <h3>Subscribe to newsletter</h3>
                <EmailSubscribeInput/>
            </div>
        </section>
    );
};

export default Footer;