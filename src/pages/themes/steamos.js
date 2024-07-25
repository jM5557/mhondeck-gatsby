import React from "react";
import Layout from "../../components/layouts/layout"
import ScrollReveal from "../../components/scroll-reveal";
import CopyButton from "../../components/copy-button";
import { Link } from "gatsby";
import logo from "../../images/logo.svg";
import release from "../../release.json";
import Seo from "../../components/seo";
import SiteNav from "../../components/site-nav";

const copyCommand = "curl -L https://github.com/SteamDeckHomebrew/decky-installer/releases/latest/download/install_release.sh | sh"

const ThemesPage = () => {
    return (
        <Layout>
            <section className="hero">
                <SiteNav />
                <h1>
                    MHOnDeck UI Theme
                </h1>
                <h2>
                    for SteamOS
                </h2>
                <div className="release-stats">
                    <a className="cta" href={release.fullThemeDL}>Download</a>
                    <p><b>Ver.</b> {release.version }</p>
                    <p><b>Includes</b> CSS Theme | SFX Pack</p>
                </div>
            </section>
            <section className="page-content">
                    <section id="installation">
                        <div class="inner-content">
                            <h2>Installation</h2>

                            <div class="text-content">
                                <div class="text-panel no-shrink">
                                    <h4>Requirements</h4>
                                    <br />
                                    <ul class="requirements side-by-side">
                                        <li>
                                            <h4>Decky Loader</h4>
                                            <p>
                                                Plugin Shop/Utility for SteamOS. 
                                                
                                                <small>
                                                    Install via "Desktop Mode" by copying the command below and pasting on the Konsole app
                                                    <br />

                                                    Access Decky from the Quick Access Menu ("..." button or "Ctrl + 2" keys) &gt; Plug Icon
                                                </small>
                                            </p>
                                            <div className="bottom">
                                                <div className="copy-wrapper space-between">
                                                    <input type="text" contentEditable="false" value={copyCommand} />
                                                    <CopyButton textToCopy={copyCommand} className = "cta small" innerText="Copy" />
                                                </div>
                                            </div>
                                            <a href="https://decky.xyz/">Official Site</a>
                                        </li>
                                        <li>
                                            <h4>CSS Loader & Audio Loader</h4>
                                            <p>
                                                Decky Plugins for customizing the SteamOS UI and SFX
                                                <small>
                                                    Install via Decky &gt; Shop (top-right icon)
                                                </small>
                                            </p>
                                            <div className="bottom">    
                                                <a href="https://docs.deckthemes.com">
                                                    Official Site
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="text-panel" id="setup-quick">
                                    <h4>Quick Setup & Update</h4>

                                    {/* <div class="video-wrapper">
                                        <div class="video-container">
                                            <iframe src="https://www.youtube.com/embed/eB4ctJHFy4Q" title="MHOnDeck - 1-Click Command to Install/Update" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        </div>
                                    </div> */}

                                    <ol>
                                        <li>
                                            Access "Desktop Mode"
                                        </li>
                                        <li>
                                            Visit <a href="/"> mhondeck.com </a> on a browser
                                        </li>
                                        <li>
                                            Under Quick Setup click "Copy"
                                        </li>
                                        <li>
                                            Open the "Konsole" app ("Steam Deck" icon start menu &gt; "System" &gt; "Konsole")
                                        </li>
                                        <li>
                                            Click on the "Paste" button, open the Keyboard ("Steam" + "X" buttons) & hit Enter
                                        </li>
                                    </ol>
                                </div>

                                <Link className="skip-btn cta" href = "#finalizing-setup">
                                    Skip to "Finalizing Setup"
                                </Link>
                                
                                <ScrollReveal>
                                    <div class="text-panel" id="setup-manual">
                                        <h4>Manual Setup & Update</h4>

                                        {/* <div class="video-wrapper">
                                            <div class="video-container">
                                                <iframe src="https://www.youtube.com/embed/eB4ctJHFy4Q" title="MHOnDeck - 1-Click Command to Install/Update" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                            </div>
                                        </div> */}

                                        <ol>
                                            <li>
                                                Access "Desktop Mode"
                                            </li>
                                            <li>
                                                Visit <a href="/themes/steamos"> mhondeck.com/themes/steamos </a> on a browser
                                            </li>
                                            <li>
                                                Click "Download" and unzip the contents onto <code>/home/deck/homebrew</code>
                                            </li>
                                        </ol>
                                    </div>
                                </ScrollReveal>

                                <div class="text-panel" id="finalizing-setup">
                                    <h4>Finalizing Setup</h4>

                                    {/* <div class="video-container">
                                        <iframe src="https://www.youtube.com/embed/T8NI1hWttGk" title="MHOnDeck Theme - Enabling and Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </div> */}

                                    <ol>
                                        <li>
                                            Return to "Game Mode" and access Decky
                                        </li>
                                        <li>
                                            Access the "CSS Loader" Plugin & scroll down. Click "Refresh" to reload your themes and then enable "MHOnDeck CSS Theme"
                                        </li>
                                        <li>
                                         Access the "Audio Loader" Plugin. Click on "Manage Packs" and then "Refresh" to reload your SFX packs and enable "MHOnDeck SFX Pack"
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
            </section>
        </Layout>
    )
}

export const Head = () => <Seo title="Steam UI Theme | SteamOS" />

export default ThemesPage;