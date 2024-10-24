import React, { useState } from "react"
import Header from "@components/header";
import GridImages from "@components/GridImages";
import Footer from "@components/footer";
import { UseModal } from "@components/Modals";
import games from "@data/games";
import releases from "@data/releases.json";
import SteamGridArtInstallation from "@content/SteamGridArtInstallation";
import DownloadWindow from "../../components/DownloadWindow";
import Seo from "../../components/seo";

const GamesPage = () => {
    let {
        showModal,
        setShowModal,
        ModalComponent
    } = UseModal();

    const { 
        showModal: downloadModal, 
        setShowModal: setDownloadModal, 
        ModalComponent: DownloadModalComponent 
      } = UseModal();

    const [searchTerm, setSearchTerm] = useState("");

    const filteredList = Object.entries(games).filter(([key, game]) =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase())
        || key.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const list = filteredList.length > 0 
        ? filteredList 
        : Object.entries(games);

    const {
        url,
        title,
        fileSize
    } = releases.games;

    return (
        <main className="game-page standard-page">
            <section id="hero" className="">
                <Header />
                <h1>Steam Grid Artwork</h1>
                <h2>Choose a game to view its SteamOS or Steam Big Picture mode artwork</h2>
                <button
                    type="button"
                    onClick={() => setDownloadModal(!downloadModal)}
                    className="cta"
                >
                    Download Pack
                </button>
                <button
                    type="button"
                    onClick={() => setShowModal(!showModal)}
                    className="cta secondary"
                >
                    Installation
                </button>
            </section>
            <input
                type="text"
                placeholder="Search Games..."
                value={searchTerm}
                className="search"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <section id="games-list">
                <GridImages games={list} />
            </section>
            <ModalComponent>
                <SteamGridArtInstallation />
            </ModalComponent>
            
            <DownloadModalComponent>
                <DownloadWindow
                    downloadLink={url}
                    title = {title}
                    fileSize={fileSize}
                />
            </DownloadModalComponent>
            <Footer />
            <Seo title = "Steam Grid Artwork - All Games" />
        </main>
    )
}

export default GamesPage;