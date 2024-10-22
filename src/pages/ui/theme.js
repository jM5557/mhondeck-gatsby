import React, { useState } from "react";
import Header from "@components/header";
import CopyCommandInput from "@components/CopyCommandInput";
import { commands } from "@data/commands";
import "@styles/theme.scss"
import Footer from "@components/footer";
import Seo from "@components/seo";
import { UseModal } from "@components/Modals";
import DownloadWindow from "@components/DownloadWindow";
import UIThemeInstallation from "@content/UIThemeInstallation";
import releases from "@data/releases.json"

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

    return (
        <main className="standard-page">
            <section id="hero" className="theme-hero">
                <Header />

                <h1>UI Theme for Steam</h1>

                <div className="details">
                    <div className="detail">
                        <strong>Version</strong>
                        <p>1.01.00</p>
                    </div>
                </div>
            </section>
            <div className="flex ui-theme-content">
                <UIThemeInstallation setDownload = { (item) => setDownload(item) } />
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