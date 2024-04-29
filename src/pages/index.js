import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo";

import logo from "../images/logo.svg";
import CopyButton from "../components/copy-button";
import ScrollReveal from "../components/scroll-reveal";

const sourceUrls = {
    cssTheme: "https://drive.google.com/drive/folders/1pQtqFlDHCDNgFCp8egYLy8Ltk0htGobG?usp=sharing",
    sfxPack: "https://drive.google.com/drive/folders/18KwOOM5FC2WkbVU924V5wng87OeI9flD?usp=sharing",
    homebrewSet: "https://www.mediafire.com/file_premium/e4cjuj1h0odobmb/homebrew.zip"
    
}
const copyCommand = `wget -P /home/deck ${ sourceUrls.homebrewSet } && unzip -o -d /home/deck /home/deck/homebrew`;

const screenshots = [
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
                <div class="side-by-side">
                    <div class="headings">
                        <a href="/" class="logo">
                            <img src={logo} alt="MH On Deck Logo" />
                        </a>
                        <h1>Monster Hunting <br /><b>In Style</b></h1>
                        <h2>Customize SteamOS with a Monster Hunter UI theme</h2>
                        <a href="/bootup-vids" className="bootup-vid-link-banner">
                            <div className="banner-inner">
                                <h4>
                                    NEW
                                </h4>
                                <span>
                                    Add a Monster Hunter-themed Bootup Video
                                </span>
                            </div>
                        </a>
                    </div>
                    <div class="downloads">
                        <div id="quick-setup">
                            <h3>Quick Setup/Update <b>Recommended</b></h3>
                            <CopyButton textToCopy={copyCommand} />
                            <small>Includes CSS Theme and SFX Pack <br />Paste & run in Konsole app</small>
                        </div>
        
                        <div id = "manual-setup">
                            <h3>Manual Setup <b>Optional</b></h3>
                            <div class="cta-wrapper">
                                <a href={sourceUrls.cssTheme} class="cta">
                                    Download CSS Theme
                                </a>

                                <a href={sourceUrls.sfxPack} class="cta">
                                    Download SFX Pack
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ScrollReveal>
            <section id = "installation">
                <div class="inner-content">
                    <h2>Installation (On Steam Deck)</h2>

                    <div class="text-content">
                        <div class="text-panel">
                            <h4>Requirements</h4>
                            <br />
                            <br />
                            <ul class = "requirements">
                                <li>
                                    <a href="https://decky.xyz/">Decky Loader</a>
                                    <p>
                                        Decky Loader is a plugin utility that expands the functionalities of SteamOS' Gaming Mode.
                                        Installation instructions are included in the Decky official site.
                                    </p>
                                </li>
                                <li>
                                    <a href="https://docs.deckthemes.com/CSSLoader/Install/">
                                        CSS Loader
                                    </a>
                                    <p>
                                        A plugin for Decky (and Windows app) that enables visual customization via CSS code.
                                        This is required for the "MHOnDeck CSS Theme"
                                    </p>
                                </li>
                                <li>
                                    <a href = "https://docs.deckthemes.com/AudioLoader/Install/">
                                        Audio Loader
                                    </a>
                                    <p>
                                        A plugin for Decky that enables sound FX and background music customization.
                                        This required for the "MHOnDeck SFX Pack"
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div class="text-panel" id = "setup-quick">
                            <h4>Quick Setup</h4>

                            <div class="video-wrapper">
                                <div class="video-container">
                                    <iframe src="https://www.youtube.com/embed/eB4ctJHFy4Q" title="MHOnDeck - 1-Click Command to Install/Update" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </div>

                            <p>
                                Access this webpage in Desktop Mode on your Steam Deck. Use the "1-Click Copy" button to copy an installation command to the clipboard. 
                                Search for the Konsole app and open a new window. Paste the clipboard contents onto the Konsole.
                                <br />
                                Voila! This command downloads the latest Homebrew Set containing both the CSS Theme and SFX Pack.
                                To update, rerun through these steps as this will overwrite the previously installed versions of both sets.
                                This will not affect any other installed themes and SFX packs on your Steam Deck.
                            </p>

                            <div class="side-by-side">
                                <img src="/static/img/install-1-click.png" alt="Install via 1-Click Command" srcset=""/>
                                <img src="/static/img/install-1-click-2.png" alt="Install via 1-Click Command" srcset=""/>
                            </div>
                        </div>
                        <br />
                        <br />

                        <div class="text-panel" id="setup-manual">
                            <h4>Manual Setup</h4>
                            <a href = "#finalizing-setup" class="cta minor">Skip</a>
                            <br />
                            <br />
                            <p>
                                Download the "MHOnDeck CSS Theme" and unzip the contents onto <code>home/deck/homebrew/themes</code>
                                <br />
                                Download the "MHOnDeck SFX Pack" and unzip the folder contents onto <code>home/deck/homebrew/sounds</code>
                                <br />
                                <br />
                                <img src="/static/img/install-extract.png" alt="Extraction ZIP"/>
                                <img src="/static/img/install-extract-2.png" alt="Extraction ZIP 2"/>
                                <br />
                                P.S. If you do not see either folder, create them manually following the directory structure above.
                            </p>
                        </div>
                        <br />
                        <br />
                        <div class="text-panel" id = "finalizing-setup">
                            <h4>Finalizing Setup</h4>
                            <br />
                            <div class="video-container">
                                <iframe src="https://www.youtube.com/embed/T8NI1hWttGk" title="MHOnDeck Theme - Enabling and Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                            <br />

                            <p>
                                Next, return to Gaming Mode, access the CSS Loader plugin from the Decky store, then "Refresh" at the bottom.
                                You will now see "MHOnDeck CSS Theme" as an option which you can enable.
                                <br />
                                <br />
                                Lastly, on Decky, visit the Audio Loader plugin and click on "Manage Packs", then "Refresh". Check the dropdown again for "MHOnDeck SFX Pack" and select to enable it.
                                <br />
                                <br />
                                When updating, repeat these steps for the latest changes to take effect.
                                <br />
                                <br />
                                P.S. CSS Loader allows multiple "Profiles" so you can toggle between different sets of CSS themes, to keep your SteamOS Gaming Mode experience fresh at any time. 
                                Also, the "MHOnDeck CSS Theme" is designed to be used FULLY standalone. If you have other CSS Loader themes enabled at the same time, certain elements of this theme MAY break. 
                                <br />
                                <br />
                            </p>
                        </div>

                            <br />
                            <br />
                    </div>
                </div>

                <div class="inner-content">
                    <h2>Installation (On Windows)</h2>

                    <div class="text-content">
                        <div class="text-panel">
                            <h4>Requirements</h4>
                            <br />
                            <br />
                            <ul class = "requirements">
                                <li>
                                    <a href="https://docs.deckthemes.com/CSSLoader/Install/">
                                        CSSLoader Desktop
                                    </a>
                                    <p>
                                        A Windows app version of CSS Loader which enables visual customization via CSS code.
                                        This is required for the "MHOnDeck CSS Theme" and is applied to Steam Big Picture Mode.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div class="text-panel" id = "setup-windows">
                            <h4>Setup</h4>

                            <p>
                                Download and install the "CSSLoader Desktop" app from the requirements section. 
                                Make sure to enable Developer Mode on Windows as instructed. Next, click on "Manage" then "Open Themes Directory"
                                <br />
                                <img src="/static/img/install-windows-1.png" alt="Windows Installation Screenshot 1" srcset=""/>
                                <br />
                                Download the latest version of "MHOnDeck CSS Theme" and extract it into the themes directory.
                                The theme should be in its own subfolder residing within the 'homebrew/themes' folder.
                                <br />
                                <img src="/static/img/install-windows-2.png" alt="Windows Installation Screenshot 2" srcset=""/>
                                <br />
                                Lastly, on CSSLoader Desktop, click on "Themes" then "Refresh Injector" and enable the "MHOnDeck CSS Theme"
                                <br />
                                <img src="/static/img/install-windows-3.png" alt="Windows Installation Screenshot 3" srcset=""/>
                                <br />
                                <br />
                                P.S. CSSLoader Desktop has the same "Profiles" feature as the Steam Deck's Decky plugin. 
                                Use this if you want the "MHOnDeck CSS Theme" enabled separately from other CSS themes that you may have installed. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollReveal>

        <ScrollReveal>
            <section id = "gallery" class="content-section">
                <div class="inner-content">
                    <h2>Gallery</h2>

                    <img src="/static/img/home-screenshot.png" alt="" class="screen-1"/>

                    <div class="images">
                        { screenshots.map(s => (
                            <a 
                                href = {`/static/img/${s}`}
                                style={{backgroundImage: `url('/static/img/${s}')`}}
                                key={s}
                            ></a>
                        ))}
                    </div>
                </div>
            </section>
        </ScrollReveal>
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
