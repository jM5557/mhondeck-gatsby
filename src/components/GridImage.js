import React from "react";

const GridImage = ({ gameData, id, className = "", renderTagType = "img" }) => {
    const findGridImage = (folderData, folderPath) => {
        if (gameData?.grid && gameData.grid.length > 0) {
            return {
                image: gameData.grid[0],
                path: `/images/gallery/${id}/${gameData.grid[0]}`
            };
        }

        for (const subfolder of Object.keys(folderData ?? {})) {
            if (typeof folderData[subfolder] === "object" && !Array.isArray(folderData[subfolder])) {
                if (folderData[subfolder].grid && folderData[subfolder].grid.length > 0) {
                    return {
                        image: folderData[subfolder].grid[0],
                        path: `/images/gallery/${folderPath}/${subfolder}/${folderData[subfolder].grid[0]}`
                    };
                }

                const nestedGridImage = findGridImage(folderData[subfolder], `${folderPath}/${subfolder}`);
                if (nestedGridImage) {
                    return nestedGridImage;
                }
            }
        }
        return null;
    };

    const gridData = findGridImage(gameData, id);
    const gridPath = gridData ? gridData.path : null;

    if (renderTagType !== "img")
        return <div
            className={className}
            style={gridPath ? {
                backgroundImage: `url(${gridPath})`,
                backgroundSize: 'cover'
            } : {}}
        >
        </div>
    else <img
        src={gridPath ? {
            backgroundImage: `url(${gridPath})`,
            backgroundSize: 'cover'
        } : {}}
        className={className}
    />
}

        export default GridImage;