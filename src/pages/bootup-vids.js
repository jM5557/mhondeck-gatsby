import * as React from "react"
import logo from "../images/logo.svg"

import Layout from "../components/layout"
import Seo from "../components/seo"
import VideoPreview from "../components/video-preview"

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

const BootupVidsPage = () => (
  <Layout id = "bootup-vids">
    <header>
      <div className="header-inner">
            <a href="/" class="logo">
                <img src={logo} alt="Logo" />
            </a>
            <h1>
                Boot Up Videos
            </h1>
            <h2>for your Steam Deck</h2>
            <small>Last Updated 5.07.2024</small>
      </div>
    </header>
    <section id = "instructions" className="side-by-side">
      <div className="text-panel">
        <h4>Quick Setup <b className="recommended-tag">Recommended</b></h4>
        <ol>
              <li>Select a video and click "1-Click Copy"</li>
              <li>Open the Konsole app</li>
              <li>Paste and hit "Enter", then wait for the installation</li>
              <li>Return to Gaming Mode</li>
              <li>
                Visit <code>Settings &gt; Customization</code>
              </li>
              <li>
                Select your video
              </li>
            </ol>
      </div>
      <div className="text-panel">
        <h4>Manual Setup</h4>
            <ol>
                <li>Select a video and click "Download"</li>
                <li>Move the downloaded video to the following directory (create the folders below if they do not exist): <code>
                    home/deck/.steam/root/config/uioverrides/movies/
                </code></li>
                <li>Return to Gaming Mode</li>
                <li>
                  Visit <code>Settings &gt; Customization</code>
                </li>
                <li>
                  Select your video
                </li>
            </ol>
      </div>
    </section>
    <section id = "videos">
            <ul className="side-by-side">
              { VideoPreviews.map(v => (
                <li key={v.iframeSrc}>
                  <VideoPreview
                    {...v}
                  />
                </li>
              ))}
            </ul>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Bootup Vids" />

export default BootupVidsPage
