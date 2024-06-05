import React from "react";
import Layout from "../../components/layouts/layout"
import ScrollReveal from "../../components/scroll-reveal";
import CopyButton from "../../components/copy-button";


const copyCommand = "wget -D -N decky"

const ThemesPage = () => {
    return (
        <Layout>
            <section className="hero">
                <h1>
                    MHOnDeck UI Theme
                </h1>
                <h2>
                    for Steam Deck or SteamOS
                </h2>
            </section>
            <section className="page-content">
                <ScrollReveal>
                    <section id="installation">
                        <div class="inner-content">
                            <h2>Installation</h2>

                            <div class="text-content">
                                <div class="text-panel">
                                    <h4>Requirements</h4>
                                    <br />
                                    <ul class="requirements side-by-side">
                                        <li>
                                            <h4>Decky Loader</h4>
                                            <p>
                                                Plugin Shop/Utility for SteamOS. Install by copying the command below and pasting on the Konsole app in "Desktop Mode" and follow the prompts.

                                                <br />

                                                To access Decky, click the ". . ." button and then the plug-shaped icon.
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
                                            <h4>CSS Loader</h4>
                                            <p>
                                                A Decky Plugin for customizing the SteamOS UI via several CSS theme options.
                                                <br />
                                                Install CSS Loader via Decky by clicking the shop icon (top-right) and then searching.
                                            </p>
                                            <div className="bottom">    
                                                <a href="https://docs.deckthemes.com/CSSLoader/Install/">
                                                    GitHub
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <h4>Audio Loader</h4>
                                                <p>
                                                    A Decky Plugin for customizing the SteamOS UI sound effects.
                                                    <br />
                                                    <br />
                                                    Install Audio Loader via Decky by clicking the shop icon (top-right) and then searching.
                                                </p>
                                                <div className="bottom">    
                                                    <a href="https://docs.deckthemes.com/CSSLoader/Install/">
                                                        GitHub
                                                    </a>
                                                </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="text-panel" id="setup-quick">
                                    <h4>Quick Setup</h4>

                                    {/* <div class="video-wrapper">
                                        <div class="video-container">
                                            <iframe src="https://www.youtube.com/embed/eB4ctJHFy4Q" title="MHOnDeck - 1-Click Command to Install/Update" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        </div>
                                    </div> */}

                                    <ol>
                                        <li>
                                            Access "Desktop Mode" (press and hold the power button to open the power menu)
                                        </li>
                                        <li>
                                            Visit <a href="/"> mhondeck.com </a> on a browser
                                        </li>
                                        <li>
                                            Click on the "Copy" button for Quick Setup
                                        </li>
                                        <li>
                                            Search for the "Konsole" app
                                        </li>
                                        <li>
                                            Click on the "Paste" button & hit Enter
                                        </li>
                                    </ol>
                                </div>

                                <div class="text-panel" id="setup-manual">
                                    <h4>Manual Setup</h4>

                                    {/* <div class="video-wrapper">
                                        <div class="video-container">
                                            <iframe src="https://www.youtube.com/embed/eB4ctJHFy4Q" title="MHOnDeck - 1-Click Command to Install/Update" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        </div>
                                    </div> */}

                                    <ol>
                                        <li>
                                            Access "Desktop Mode" (press and hold the power button to open the power menu)
                                        </li>
                                        <li>
                                            Visit <a href="/"> mhondeck.com </a> on a browser
                                        </li>
                                        <li>
                                            Download the "MHOnDeck CSS Theme" and unzip the contents onto <code>home/deck/homebrew/themes</code>
                                        </li>
                                        <li>
                                            Download the "MHOnDeck SFX Pack" and unzip the folder contents onto <code>home/deck/homebrew/sounds</code>
                                        </li>
                                    </ol>
                                </div>

                                <div class="text-panel" id="setup-manual">
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
                </ScrollReveal>
            </section>
        </Layout>
    )
}


export default ThemesPage;