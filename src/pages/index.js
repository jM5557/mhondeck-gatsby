import * as React from "react"

import Layout from "../components/layouts/layout"
import Seo from "../components/seo";

import logo from "../images/logo.svg";
import windowsLogo from "../images/windows-logo-white.png";
import steamLogo from "../images/steam-logo-white.png";
import CopyButton from "../components/copy-button";
import { Link } from "gatsby";
import release from "./../release.json";
import ScrollReveal from "../components/scroll-reveal";
import HomeGallery from "../components/home-gallery";

const copyCommand = `wget -P -N /home/deck ${release.fullThemeDL} && unzip -o -d /home/deck /home/deck/homebrew`;

const screenshots = [
    'home-screenshot.png',
    'game-screenshot.png',
    'settings-page-screenshot.png',
    'library-page-screenshot.png',
    'downloads-page-screenshot.png',
    'qam-screenshot.png',
    'menu-screenshot.png',
    'sub-menu-screenshot.png'
]

const IndexPage = () => (
    <Layout>
        <React.Fragment>
            <section class="main-section">
                <div id="top">
                    <div class="headings">
                        <a href="/" class="logo">
                            <img src={logo} alt="MHOnDeck Logo" />
                        </a>
                        <h1>Monster Hunting <br /><b>In Style</b></h1>
                        <h2>Custom Monster Hunter UI theme for Steam</h2>
                        <div className="bottom-bar side-by-side">
                            <div className="bar-item">
                                <h3>SteamOS <b className="recommended-tag">Quick Setup</b></h3>
                                <img alt="windows-logo" src={steamLogo} />
                                <div className="copy-wrapper space-between">
                                    <input type="text" contentEditable="false" value={copyCommand} />
                                    <CopyButton textToCopy={copyCommand} className="cta small" innerText="Copy" />
                                </div>
                                <small>Paste in Konsole App<br /> <br />Decky, CSS Loader, Audio Loader REQUIRED <br /><br /> <Link href="/themes/steamos">More Info</Link></small>
                            </div>
                            <div className="bar-item">
                                <h3>Windows 10 & 11</h3>
                                <img alt="windows-logo" src={windowsLogo} />
                                <a href={release.cssThemeDL} className="cta">Download</a>
                                <small>CSS Theme (Only)<br /> <br /> CSSLoader Desktop REQUIRED<br /><br /><Link href="/themes/windows">More Info</Link></small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bootup-vid-link-banner">
                <div className="banner-inner">
                    <h4>
                        NEW
                    </h4>
                    <h5>
                        Bootup Videos for SteamOS
                    </h5>
                </div>
                <Link className="cta" href="/bootup-vids">Browse</Link>
            </div>
            <section className="new-features side-by-side">
                <ScrollReveal>
                    <img alt = "New Features Screenshot" src = "/additional-features.png" />
                </ScrollReveal>
                <div className="details">
                    <h3>New Features</h3>
                    <p>
                        Enhance your SteamOS experience with the MHOnDeck CSS theme! 
                        Try out new customizable options to mix and match designs, for a more personalized UI.
                    </p>
                </div>
            </section>
            <img alt = "New Main Menu Backgrounds" src = "/sidebar-comparison.png" className="screen-full" />

            <HomeGallery images={screenshots} />
        </React.Fragment>
    </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
