import React from "react";
import Layout from "../../components/layouts/layout"
import { Link } from "gatsby";
import logo from "../../images/logo.svg";
import release from "../../release.json";
import Seo from "../../components/seo";
import SiteNav from "../../components/site-nav";


const ThemesWindowsPage = () => {
    return (
        <Layout>
            <section className="hero">
                <SiteNav />
                <h1>
                    MHOnDeck UI Theme
                </h1>
                <h2>
                    for Windows
                </h2>
                <div className="release-stats">
                    <a href = {release.cssThemeDL} className="cta">Download</a>
                    <p><b>Ver.</b> { release.version }</p>
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
                                            <h4>CSS Loader Desktop</h4>
                                            <p>
                                                Application to inject custom CSS themes onto Steam
                                            </p>
                                            <a href="https://github.com/DeckThemes/CSSLoader-Desktop">GitHub</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="text-panel" id="setup-quick">
                                    <h4>Setup</h4>

                                    <ol>
                                        <li>
                                            Visit <a href="/"> mhondeck.com </a> and Download the Windows CSS Theme
                                        </li>
                                        <li>
                                            Extract the contents onto your CSSLoader Theme folder
                                                <br />

                                            To quickly locate this folder, on CSSLoader Desktop, visit the "Manage" tab, and then "Open Themes Directory"
                                        </li>
                                        <li>
                                            On CSSLoader Desktop, click on the "Themes" tab and scroll down to "Refresh Injector"
                                        </li>
                                        <li>
                                            Enable the "MHOnDeck CSS Theme"
                                        </li>
                                        <li>
                                            Open Steam Big Picture mode
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

export const Head = () => <Seo title="Steam UI Theme | Windows" />

export default ThemesWindowsPage;