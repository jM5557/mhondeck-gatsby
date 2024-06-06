import * as React from "react"
import logo from "../images/logo.svg"

import Layout from "../components/layouts/layout"
import Seo from "../components/seo"
import VideoPreview from "../components/video-preview"
import { Link } from "gatsby"

const VideoPreviews = [
  {
    videoId: "apiqRmO9Xyo",
    videoTitle: "20th Anniversary - Hunters Intro (MH Logo - Sound)",
    downloadLink: "https://www.mediafire.com/file_premium/1h2n4jy1p980fwk/MHOnDeck_-_20th_Anniversary_-_Hunters_Intro_-_OG_Logo_-_SOUND_-_3s.webm"
  },
  {
    videoId: "iRKbKtKe900",
    videoTitle: "20th Anniversary - Hunter's Intro (Anniversary Logo - Sound)",
    downloadLink: "https://www.mediafire.com/file_premium/llovg70w7uxdcy3/MHOnDeck_-_20th_Anniversary_-_Hunters_Intro_-_20th_Logo_-_SOUND_-_3s.webm"
  },
  {
    videoId: "c20UGlO2NOU",
    videoTitle: "20th Anniversary - Hunters Intro (No Logo - Sound)",
    downloadLink: "https://www.mediafire.com/file_premium/0wj07a94q75na0u/MHOnDeck_-_20th_Anniversary_-_Hunters_Intro_-_NO_Logo_-_SOUND_-_3s.webm"
  },
  {
    videoId: "rlttqbAC1mk",
    videoTitle: "20th Anniversary - Hunter's Intro (MHOnDeck Logo - Sound)",
    downloadLink: "https://www.mediafire.com/file_premium/eh4mbtwp6bwgh8o/MHOnDeck_-_20th_Anniversary_-_Hunters_Intro_-_MHOnDeck_Logo_-_SOUND_-_3s.webm"
  }
]

const BootupVidsPage = () => {
  const [tab, selectTab] = React.useState("BROWSE");
  const switchTab = (newTab = "BROWSE") => selectTab(newTab)
  return (<Layout id="bootup-vids">
    <section className="hero">
      <Link href="/" className="logo">
        <img alt="MHOnDeck Logo" src={logo} />
      </Link>
      <h1>
        Steam Bootup Videos
      </h1>
      <h2>
        for Steam Deck (SteamOS)
      </h2>
      <div className="release-stats">
        <p><b>Last Updated</b> 5.07.2024</p>
      </div>
      <div className="release-stats tabs">
          <button 
            onClick={() => switchTab("BROWSE")} 
            className={tab=="BROWSE"?"cta":"cta secondary"}
          >
            Videos
          </button>
          <button 
            onClick={()=> switchTab("INSTALL")} 
            className={tab=="INSTALL"?"cta": "cta secondary"}>
            Installation
          </button>
        </div>
    </section>
    <div>
      <section className="page-content">
        { (tab === "INSTALL") &&
          <section id="instructions">
            <div className="text-panel">
              <h3>Quick Setup <b className="recommended-tag">Recommended</b></h3>
              <ol>
                <li>Browse to this page in "Desktop Mode"</li>
                <li>Choose a video and click "1-Click Copy"</li>
                <li>Open the Konsole app</li>
                <li>Paste and hit "Enter", then wait for the installation</li>
                <li>Return to "Gaming Mode" & Visit <code>Settings &gt; Customization</code></li>
                <li>Choose your Bootup Video</li>
              </ol>
            </div>
            <div className="text-panel">
              <h3>Manual Setup</h3>
              <ol>
                <li>Choose a video and click "Download"</li>
                <li>Move the downloaded video to the following directory (create the folders below if they do not exist): 
                  <code>
                    home/deck/.steam/root/config/uioverrides/movies/
                  </code>
                </li>
                <li>Return to "Gaming Mode" & Visit <code>Settings &gt; Customization</code>
                </li>
                <li>Choose your Bootup Video</li>
              </ol>
            </div>
          </section>
        }
        { (tab === "BROWSE") &&
          <section id="videos">
            <ul className="side-by-side">
              {VideoPreviews.map(v => (
                <li key={v.iframeSrc}>
                  <VideoPreview
                    {...v}
                  />
                </li>
              ))}
            </ul>
          </section>
        }
      </section>
    </div>
  </Layout>
)}

export const Head = () => <Seo title="Bootup Vids" />

export default BootupVidsPage
