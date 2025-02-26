import React, { useState } from "react";
import Header from "@components/header";
import Footer from "@components/footer";
import SteamGridDB from "@content/SteamGameArtwork/SteamGridDB";
import WithoutSteamGridDB from "@content/SteamGameArtwork/WithoutSteamGridDB";
import "@styles/games/install.scss";

const GameArtworkInstall = () => {
    return (
        <main className="game-page standard-page">
            <section id="hero">
                <Header />
                <h1>Steam Game Artwork</h1>
                <h2>Installation</h2>
            </section>
            <section className="install-section">
                <div className="section-content">
                    <div className="text-content">
                        <SteamGridDB />
                    </div>
                </div>
            </section>
            <section className="install-section">
                <div className="section-content">
                    <div className="text-content">
                        <WithoutSteamGridDB />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default GameArtworkInstall;