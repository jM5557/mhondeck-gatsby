import React, { useEffect, useState } from 'react';

const DownloadWindow = ({
    downloadLink,
    title,
    fileSize
}) => {
    const [countdown, setCountdown] = useState(5);
    const [isDownloading, setIsDownloading] = useState(true);

    useEffect(() => {
        if (countdown > 0 && isDownloading) {
            const timer = setTimeout(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);

            return () => clearTimeout(timer);
        } else if (countdown === 0 && isDownloading) {
            // Start the download when countdown reaches zero
            window.location.href = downloadLink;
        }
    }, [countdown, isDownloading, downloadLink]);

    const handleDownloadClick = () => {
        setIsDownloading(true);
    };

    return (
        <div className="download-window">
            <h3>Download</h3>
            <h2>{title}</h2>
            <p>File Size: {fileSize}</p>
            <div className='download-inner'>
                {isDownloading ? (
                    <>
                        {countdown > 0 &&
                            <p>Download starting in {countdown} seconds...</p>
                        }

                        {countdown === 0 &&
                            <p>Download started...</p>
                        }
                    </>
                ) : (
                    <button
                        type="button"
                        className='cta'
                        onClick={handleDownloadClick}
                    >
                        Download Now
                    </button>
                )}
            </div>
        </div>
    );
};

export default DownloadWindow;
