import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.svg"

import Layout from "../components/layout"
import Seo from "../components/seo"
import VideoPreview from "../components/video-preview"

const VideoPreviews = [
  {
    videoId: "apiqRmO9Xyo",
    videoTitle: "MHOnDeck | Steam Deck Bootup Video | 20th Anniversary - Hunters Intro (MH Logo - Sound)",
    downloadLink: "https://www.mediafire.com/file_premium/i23vs5mgbie26sn/MHOnDeck_-_20th_Anniversary_-_Hunters_Intro_-_OG_Logo_-_SOUND_-_3s.mp4"
  },
  {
    videoId: "c20UGlO2NOU",
    videoTitle: "MHOnDeck | Steam Deck Bootup Video | 20th Anniversary - Hunter's Intro (No Logo - Sound)",
    downloadLink: "https://www.mediafire.com/file_premium/q9tbyzak77k5a8m/MHOnDeck_-_20th_Anniversary_-_Hunters_Intro_-_NO_Logo_-_SOUND_-_3s.mp4"
  },
  {
    videoId: "rlttqbAC1mk",
    videoTitle: "MHOnDeck | Steam Deck Bootup Video | 20th Anniversary - Hunter's Intro (MHOnDeck Logo - Sound)",
    downloadLink: "https://www.mediafire.com/file_premium/7be3xvblqpfvzr4/MHOnDeck_-_20th_Anniversary_-_Hunters_Intro_-_MHOnDeck_Logo_-_SOUND_-_3s.mp4"
  }
]

const BootupVidsPage = () => (
  <Layout id = "bootup-vids">
    <header>
            <a href="/" class="logo">
                <img src={logo} alt="Logo" />
            </a>
            <h1>
                Boot Up Videos
            </h1>
            <h2>for your Steam Deck</h2>
        </header>
        <div class="text-panel">
            <h3>How to Install</h3>
            <h4>Quick Setup</h4>
            <ol>
              <li>Click the "1-Click Copy" button for the bootup video of your choice</li>
              <li>Open the Konsole app</li>
              <li>Paste and hit "Enter" to run the installation</li>
              <li>Return to Gaming Mode</li>
              <li>
                Visit Settings then Customization and enable the selected Boot Up Video
              </li>
            </ol>
            <br/>
            <br/>
            <br/>
            <h4>Manual Setup</h4>
            <ol>
                <li>Download a Boot Up video of your choice</li>
                <li>Copy the downloaded video to the folder: <code>
                    home/deck/.steam/root/config/uioverrides/movies/
                </code></li>
                <li>Return to Gaming Mode
                </li>
                <li>
                    Visit Settings then Customization and enable the selected Boot Up Video
                </li>
            </ol>
        </div>
        <section id = "videos">
            <ul>
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
