import React from "react";
import CopyButton from "./copy-button";

const VideoPreview = ({
    videoId,
    videoTitle,
    downloadLink
}) => {
    const copyCommand = `wget -P ~/.steam/root/config/uioverrides/movies ${ downloadLink }`
    return (
        <div className="video-preview">
            <div class="video-container">
                <iframe src={'https://www.youtube.com/embed/' + videoId} title={videoTitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div class="details">
                <h3>{videoTitle}</h3>
                <div className="btns">
                    <CopyButton textToCopy={copyCommand} />
                    <a class="cta" href={downloadLink}>Download</a>
                </div>
            </div>
        </div>
    )
}

export default VideoPreview;