import * as React from "react"
import logo from "../images/logo.svg";
import { Link } from "gatsby";
import useIcons from "../hooks/UseIcons";

const SiteNav = () => {
    const {
        windows,
        steam,
        media
    } = useIcons();

    return (
        <nav className="space-between site-nav">
            <a href="/" class="logo">
                <img src={logo} alt="MHOnDeck Logo" />
            </a>

            <div className="side-by-side sub-nav">
                <Link href = "/themes/steamos">
                    <img src={ steam } alt="" />
                    Steam
                </Link>
                <Link href = "/themes/windows">
                    <img src={ windows } alt="" />
                    Windows
                </Link>
                <Link href = "/videos">
                    <img src={ media } alt="" />
                    Videos
                </Link>
            </div>
        </nav>
    )
}

export default SiteNav;