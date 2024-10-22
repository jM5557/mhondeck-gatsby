import React from "react";
import artwork from "@data/output.json";
import GridImage from "./GridImage";

const GridImages = ({ games }) => (
    <>
    {
        games.map(([key, game], index) => {
            const gameData = artwork[key];
            const id = key;

            return (
                <a key={index} href={`/games/${id}`} className="game-thumb">
                    <GridImage
                        gameData={gameData}
                        id={id}
                        className="img-wrapper"
                        renderTagType="div"
                    />
                    <small>
                        {game.title}
                    </small>
                </a>
            )
        }
        )
    }
    </>
)

export default GridImages;