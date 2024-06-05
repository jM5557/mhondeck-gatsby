import React from "react";
import Layout from "../../components/layouts/layout"
import ScrollReveal from "../../components/scroll-reveal";

const ThemesWindowsPage = () => {
    return (
        <Layout>
            <section className="hero">
                <h1>
                    MHOnDeck UI Theme
                </h1>
                <h2>
                    for Windows
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
                                    <br />
                                    <ul class="requirements">
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

                                <div class="text-panel" id="setup-windows">
                                    <h4>Setup</h4>

                                    <p>
                                        Download and install the "CSSLoader Desktop" app from the requirements section.
                                        Make sure to enable Developer Mode on Windows as instructed. Next, click on "Manage" then "Open Themes Directory"
                                        <br />
                                        <img src="/static/img/install-windows-1.png" alt="Windows Installation Screenshot 1" srcset="" />
                                        <br />
                                        Download the latest version of "MHOnDeck CSS Theme" and extract it into the themes directory.
                                        The theme should be in its own subfolder residing within the 'homebrew/themes' folder.
                                        <br />
                                        <img src="/static/img/install-windows-2.png" alt="Windows Installation Screenshot 2" srcset="" />
                                        <br />
                                        Lastly, on CSSLoader Desktop, click on "Themes" then "Refresh Injector" and enable the "MHOnDeck CSS Theme"
                                        <br />
                                        <img src="/static/img/install-windows-3.png" alt="Windows Installation Screenshot 3" srcset="" />
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
            </section>
        </Layout>
    )
}


export default ThemesWindowsPage;