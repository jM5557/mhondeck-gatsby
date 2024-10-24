import React from "react";
import Seo from "@components/seo";
import data from "@data/output.json";
import games from "@data/games.json";
import PlatformInfo from "@components/PlatformInfo";
import RecursiveRenderer from "@components/RecursiveRenderer";
import "@styles/games.scss";
import Header from "@components/header";
import Footer from "@components/footer";
import { UseModal } from "@components/Modals";
import SteamGridArtInstallation from "@content/SteamGridArtInstallation.mdx";
import DownloadWindow from "../../components/DownloadWindow";


const GamePage = ({ params }) => {
  const { id } = params;
  const gameData = data[id];

  const { showModal, setShowModal, ModalComponent } = UseModal();
  const { 
    showModal: downloadModal, 
    setShowModal: setDownloadModal, 
    ModalComponent: DownloadModalComponent 
  } = UseModal();

  if (!gameData) {
    return <p>Game not found</p>;
  }

  const findHeroImage = (folderData, folderPath) => {
    if (gameData.hero && gameData.hero.length > 0) {
      return {
        image: gameData.hero[0],
        path: `/images/gallery/${id}/${gameData.hero[0]}`
      };
    }

    for (const subfolder of Object.keys(folderData)) {
      if (typeof folderData[subfolder] === "object" && !Array.isArray(folderData[subfolder])) {
        if (folderData[subfolder].hero && folderData[subfolder].hero.length > 0) {
          return {
            image: folderData[subfolder].hero[0],
            path: `/images/gallery/${folderPath}/${subfolder}/${folderData[subfolder].hero[0]}` // Construct path for found hero image
          };
        }

        const nestedHeroImage = findHeroImage(folderData[subfolder], `${folderPath}/${subfolder}`);
        if (nestedHeroImage) {
          return nestedHeroImage;
        }
      }
    }
    return null;
  };

  const heroData = findHeroImage(gameData, id);
  const heroImagePath = heroData ? heroData.path : null;

  return (
    <main
      className="game-page"
    >
      <section
        id="hero"
        style={{
          backgroundImage: heroImagePath ? `url(${heroImagePath})` : "none", // Set hero image as background with the full path
          backgroundSize: "cover"
        }}
      >
        <Header />

        <h1>{games[id].title}</h1>
        <PlatformInfo gameId={id} />

        <button 
          type="button" 
          onClick={() => setShowModal(!showModal)}
          className="cta secondary"
        >
          Installation
        </button>
      </section>

      <div className="artwork">
        <div className="artwork-text">
          <div>
            <h2>Steam Grid Artwork</h2>
            <h3>Use with the SteamGridDB Plugin for Decky Loader</h3>
          </div>

          { (games[id].artwork) &&
            <button 
              type = "button"
              className="cta"
              onClick={() => setDownloadModal(true) }
            >
              Download Pack
            </button>
          }
        </div>
        <RecursiveRenderer data={gameData} folderPath={id} />
      </div>

      <ModalComponent>
        <SteamGridArtInstallation />
      </ModalComponent>
        
      { (games[id].artwork) &&
        <DownloadModalComponent>
          <DownloadWindow
            downloadLink={games[id].artwork.url}
            title={games[id].title}
            fileSize={games[id].artwork.fileSize}
          />
        </DownloadModalComponent>
      }

      <Footer />

      <Seo title = { games[id].title } />
    </main>
  );
};

export default GamePage;
