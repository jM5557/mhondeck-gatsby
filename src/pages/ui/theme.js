import React, { useState } from "react";
import Header from "@components/header";
import "@styles/theme.scss"
import Footer from "@components/footer";
import Seo from "@components/seo";
import { UseModal } from "@components/Modals";
import DownloadWindow from "@components/DownloadWindow";

import Windows from "@content/UI Theme/Windows";
import SteamOS from "@content/UI Theme/SteamOS";
import Finalizing from "@content/UI Theme/Finalizing";
import Uninstall from "@content/UI Theme/Uninstall";

const Theme = () => {
    const {
        setShowModal: setDownloadModal,
        ModalComponent: DownloadModalComponent
    } = UseModal();

    const [selectedDownload, setSelectedDownload] = useState(null);

    const setDownload = (download) => {
        setSelectedDownload(download);
        setDownloadModal(true);
    }

    const onExitDownload = () => {
        setSelectedDownload(null);
        setDownloadModal(false);
    }

    const [platform, setPlatform] = useState("STEAMOS");

    return (
        <main className="standard-page">
            <section id="hero" className="">
                <Header />

                <h1>MHOnDeck UI Theme</h1>
                <h2>Contains a visual UI overhaul theme and a Sound FX replacement pack</h2>

                <div className="details">
                    <div className="detail">
                        <strong>Version</strong>
                        <p>1.01.00</p>
                    </div>
                </div>
            </section>
            <div className="ui-theme-content">
                <section className="install per-platform">
                    <h2 className="flex space-b align-c with-tabs">
                        <span>Installation</span>
                        <div className="flex space-b">
                            <button 
                                type = "button"
                                onClick={()=>setPlatform("STEAMOS")}
                                className={platform === "STEAMOS" ? "cta" : "cta secondary"}
                            >SteamOS</button>
                            <button 
                                type = "button"
                                onClick={()=>setPlatform("WINDOWS")}
                                className={platform === "WINDOWS" ? "cta" : "cta secondary"}
                            >Windows</button>
                        </div>
                    </h2>
                    { (platform === "STEAMOS")
                        ? (<SteamOS setDownload = { (item) => setDownload(item) } />)
                        : (<Windows setDownload = { (item) => setDownload(item) } />)
                    }
                </section>
                <Finalizing />
                <Uninstall />
            </div>
            <Footer />

            {(selectedDownload) &&
                <DownloadModalComponent
                    onExit={onExitDownload}
                >
                    <DownloadWindow
                        downloadLink={selectedDownload.url}
                        title={selectedDownload.title}
                        fileSize={selectedDownload.fileSize}
                    />
                </DownloadModalComponent>
            }
        </main>
    );
}

export const Head = () => <Seo title="MHOnDeck UI Theme" />

export default Theme;