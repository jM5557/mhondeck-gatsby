/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import logo from "../../images/logo.svg"

import "./../layout.css"
import "./../../styles/main.scss";

const Layout = ({ children, id = "", title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  React.useEffect(() => window.scrollTo(0, 0), [])

  return (
    <>
        <main id = {id}>
        <header>
            <div className="header-inner space-between">
                <a href="/" class="logo">
                    <img src={logo} alt="Logo" />
                </a>
                <ul className="sub-nav side-by-side">
                    <li>
                        <a href = "/themes">
                            UI Themes
                        </a>
                    </li>
                    <li>
                        <a href = "/themes">
                            SFX Packs
                        </a>
                    </li>
                    <li>
                        <a href = "/themes">
                            Music
                        </a>
                    </li>
                </ul>    
            </div>
            </header>
            {children}
        </main>
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-section">
                    <b class="section-title">Resources</b>
                    <ul>
                        <li>
                            <a href="https://decky.xyz">Decky.xyz</a>
                        </li>
                        <li>
                            <a href="https://deckthemes.com">Deckthemes.com | Main Site</a>
                        </li>
                        <li>
                            <a href="https://docs.deckthemes.com">Deckthemes.com | Docs Site</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-section">
                    <b class="section-title">Questions or Issues?</b>
                    <ul>
                        <li>
                            <a href="https://reddit.com/u/jM5557">Chat Us on Reddit</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCyxE1v3MDSvDF0JwbwQ7DAQ">Subscribe on YouTube</a>
                        </li>
                        <li>
                            <a href="mailto:mhondeck.site@gmail.com">Send Us an Email</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="disclaimer">
                <b>DISCLAIMER:</b>
                <span>
                    This site is not associated with CAPCOM Co., Ltd. or the Monster Hunter brand. All images are copyrighted and property of their respectful owners.
                </span>
            </div>
        </footer>
    </>
  )
}

export default Layout
