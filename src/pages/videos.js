import React, { useState } from "react";
import VideoPreview from "@components/VideoPreview"
import Header from "@components/header";
import { UseModal } from "@components/Modals";
import Footer from "@components/footer";
import Videos from "@data/videos.json";
import DownloadWindow from "@components/DownloadWindow";
import VideosInstallation from "@content/VideosInstallation";
import Seo from "../components/seo";

const VideosPage = () => {
  const {
    showModal,
    setShowModal,
    ModalComponent
  } = UseModal();

  const {
    setShowModal: setDownloadModal, 
    ModalComponent: DownloadModalComponent 
  } = UseModal();

  const [selectedVideo, setSelectedVideo] = useState(null);

  const onExit = () => setSelectedVideo(null);
  const onSelectVideo = (video) => {
    setSelectedVideo(video);
    setDownloadModal(true);
  }
  
  return (<main id="videos-page" className="standard-page">
    <section id="hero" className="videos-hero">
      <Header />
      <h1>
        Bootup Videos
      </h1>
      <h2>
        Videos that play when Gaming Mode or Steam Big Picture Mode starts up
      </h2>
      <button 
        type = "button"
        className="cta secondary"
        onClick={()=>setShowModal(!showModal)}
      >
        Installation
      </button>
    </section>
    <article className="video-gallery-wrapper">
      <ul className="video-gallery">
        {Videos.map(v => (
          <li key={v.iframeSrc}>
            <VideoPreview
              {...{ 
                onSelectVideo,
                video: v 
              }} 
            />
          </li>
        ))}
      </ul>
    </article>
    <ModalComponent>
      <VideosInstallation />
    </ModalComponent>
    
    { (selectedVideo) &&
      <DownloadModalComponent
        onExit = {onExit}
      >
        <DownloadWindow 
          downloadLink={selectedVideo.download.url}
          title={selectedVideo.title}
          fileSize={selectedVideo.download.fileSize}
        />
      </DownloadModalComponent>
    }
    <Footer />
    <Seo title = "Bootup Videos for Steam" />
  </main>
  )
}

export default VideosPage
