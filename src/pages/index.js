import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo";

import logo from "../images/logo.svg";
import windowsLogo from "../images/windows-logo-white.png";
import steamLogo from "../images/steam-logo-white.png";
import CopyButton from "../components/copy-button";
import ScrollReveal from "../components/scroll-reveal";
import HomeGallery from "../components/home-gallery";

const sourceUrls = {
    cssTheme: "https://drive.google.com/drive/folders/1pQtqFlDHCDNgFCp8egYLy8Ltk0htGobG?usp=sharing",
    sfxPack: "https://drive.google.com/drive/folders/18KwOOM5FC2WkbVU924V5wng87OeI9flD?usp=sharing",
    homebrewSet: "https://www.mediafire.com/file_premium/e4cjuj1h0odobmb/homebrew.zip"
    
}
const copyCommand = `wget -P -N /home/deck ${ sourceUrls.homebrewSet } && unzip -o -d /home/deck /home/deck/homebrew`;

const screenshots = [
    'home-screenshot.png',
    'game-screenshot.png',
    'settings-page-screenshot.png',
    'library-page-screenshot.png',
    'downloads-page-screenshot.png',
    'qam-screenshot.png',
    'sub-menu-screenshot.png'
]

const IndexPage = () => (
  <Layout>
    <React.Fragment>
   <section class="main-section">
            <div id = "top">
                <div class="headings">
                    <a href="/" class="logo">
                        <img src={logo} alt="MHOnDeck Logo" />
                    </a>
                    <h1>Monster Hunting <br /><b>In Style</b></h1>
                    <h2>Customize Steam with a Monster Hunter UI theme & more</h2>
                    <div className = "bottom-bar side-by-side">
                        <ScrollReveal transitionDelay="200ms">
                            <div className="bar-item">
                                <h3>SteamOS <b className="recommended-tag">Quick Setup</b></h3>
                                <img alt = "windows-logo" src = {steamLogo} />
                                <div className="copy-wrapper space-between">
                                    <input type="text" contentEditable="false" value={copyCommand} />
                                    <CopyButton textToCopy={copyCommand} className = "cta small" innerText="Copy" />
                                </div>
                                <small>Paste in Konsole App <br /><br /> <a href = "/themes/steamos">More Info</a></small>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal transitionDelay="400ms">
                            <div className="bar-item">
                                <h3>SteamOS <b>Manual Setup</b></h3>
                                <img alt = "windows-logo" src = {steamLogo} />
                                <a href = "/" className="cta">Download</a>
                                <small>Unzip into <code>home/deck/homebrew</code><br /><br /> <a href = "/themes/steamos">More Info</a></small>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal transitionDelay="600ms">
                            <div className="bar-item">
                                <h3>Windows 10 & 11</h3>
                                <img alt = "windows-logo" src = {windowsLogo} />
                                <a href = "/" className="cta">Download</a>
                                <small>CSS Theme (Only)<br/><br/><a href = "/themes/windows">More Info</a></small>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
        <div className="bootup-vid-link-banner space-between">
            <div className="banner-inner">
                <h4>
                    NEW
                </h4>
                <p>
                    Monster Hunter Boot Up Videos for SteamOS
                </p>
            </div>
            <a className = "cta" href="/bootup-vids">Browse</a>
        </div>
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
