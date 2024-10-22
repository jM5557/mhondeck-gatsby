import React from "react";
import logo from "@images/logo.svg";

const Footer = () => (
    <footer id="site-footer">
        <ul>
            <li><a href="https://reddit.com/u/jM5557">Reddit</a></li>
            <li><a href="https://www.youtube.com/@MHOnDeck">YouTube</a></li>
            <li><a href="mailto:mhondeck.site@gmail.com">Email</a></li>
        </ul>
        <img alt="Footer Logo" src={logo} id="footer-logo" />
        <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="https://store.steampowered.com">Steam</a></li>
        </ul>
    </footer>
)

export default Footer;