import React from "react";
import CopyButton from "./CopyButton";

const VideoPreview = ({
    video,
    onSelectVideo
}) => {
    const copyCommand = `wget -P ~/.steam/root/config/uioverrides/movies ${video.download.url}`;
    const copyCommandWindows = `mkdir "%ProgramFiles(x86)%\\Steam\\config\\uioverrides\\movies" && cd "%ProgramFiles(x86)%\\Steam\\config\\uioverrides\\movies" && curl -L -o "${video.title}.webm" "${video.download.url}"`
    return (
        <div className="video-preview">
            <div class="video-container">
                <iframe
                    src={'https://www.youtube.com/embed/' + video.id}
                    title={video.title}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </div>

            <div class="details">
                <h3>{video.title}</h3>
                    <div className="btns">
                        <div className="flex">
                            <CopyButton textToCopy={copyCommand} innerText="Copy" />
                            <button
                                type="button"
                                className="cta secondary"
                                onClick={() => onSelectVideo(video)}
                            >
                                Download
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default VideoPreview;