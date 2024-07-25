import * as React from "react"

import Layout from "../components/layouts/layout"
import Seo from "../components/seo"
import VideoPreview from "../components/video-preview"
import SiteNav from "../components/site-nav"

const VideoPreviews = [
  {
    videoId: "apiqRmO9Xyo",
    videoTitle: "20th Anniversary - Hunters Intro (MH Logo - Sound)",
    downloadLink: "https://www.dropbox.com/scl/fi/u6lp965argjj6biiq5u5i/MHOnDeck-20th-Anniversary-Hunters-Intro-OG-Logo-SOUND-3s.webm?rlkey=iqeqa8fnzaegzczlslzhm5x25&dl=1"
  },
  {
    videoId: "iRKbKtKe900",
    videoTitle: "20th Anniversary - Hunter's Intro (Anniversary Logo - Sound)",
    downloadLink: "https://www.dropbox.com/scl/fi/7cai2j50qsoyox7mp51b6/MHOnDeck-20th-Anniversary-Hunters-Intro-20th-Logo-SOUND-3s.webm?rlkey=022i9jhcp5j1j6zqwnbdtqc1z&dl=1"
  },
  {
    videoId: "c20UGlO2NOU",
    videoTitle: "20th Anniversary - Hunters Intro (No Logo - Sound)",
    downloadLink: "https://www.dropbox.com/scl/fi/r06ow2ybojvkh4ovgu801/MHOnDeck-20th-Anniversary-Hunters-Intro-NO-Logo-SOUND-3s.webm?rlkey=plp3yjzpv89tmwb2hr2e4apqu&dl=1"
  },
  {
    videoId: "rlttqbAC1mk",
    videoTitle: "20th Anniversary - Hunter's Intro (MHOnDeck Logo - Sound)",
    downloadLink: "https://www.dropbox.com/scl/fi/6m869gc7rv1dehe7f9cyh/MHOnDeck-20th-Anniversary-Hunters-Intro-MHOnDeck-Logo-SOUND-3s.webm?rlkey=twg4dustxpfnvwauvjbb051w6&dl=1"
  }
]

const VideosPage = () => {
  const [tab, selectTab] = React.useState("BROWSE");
  const switchTab = (newTab = "BROWSE") => selectTab(newTab)
  return (<Layout id="videos">
    <section className="hero">
      <SiteNav />
      <h1>
        Steam Bootup Videos
      </h1>
      <h2>
        for SteamOS
      </h2>
      <div className="release-stats tabs">
        <p><b>Last Updated</b> 5.07.2024</p>
        <div className="side-by-side">
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
                <li>Paste and hit "Enter", then wait  to complete</li>
                <li>Return to "Gaming Mode" and navigate to <code>Settings &gt; Customization</code></li>
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
                <li>Return to "Gaming Mode" and navigate to <code>Settings &gt; Customization</code>
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

export default VideosPage
