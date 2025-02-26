import * as React from "react";
import logo from "@images/logo.svg";

const Header = () => (
  <nav id="top-nav" className="flex space-b align-c">
    <a href="/" id="main-logo">
      <img alt="MHOnDeck Logo" src={logo} />
      <span className="hidden">MHOnDeck</span>
    </a>
    <div className="submenu flex space-b align-c">
      <li><a href="/ui/theme">UI Theme</a></li>
      <li><a href="/games">Games</a></li>
      <li><a href="/videos">Videos</a></li>
    </div>
  </nav>
)

export default Header
