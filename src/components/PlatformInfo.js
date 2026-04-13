import React from "react";
import platformData from "@data/platforms.json"; // Adjust the path as necessary
import games from "@data/games.json"; // Adjust the path as necessary

const PlatformInfo = ({ gameId }) => {
  // Get the platforms associated with the gameId
  const platforms = games[gameId].platforms;

  // If there are no platforms, return null
  if (!platforms || platforms.length === 0) {
    return <p>No platforms available for this game.</p>;
  }

  return (
    <div className="platform-info">
      <h3>Platforms</h3>
      <div className="platforms-container">
        {platforms.map(platformKey => {
          const platform = platformData[platformKey]; // Get platform details

          if (!platform) return null; // Skip if platform data is not found

          return (
            <div key={platformKey} className="platform-box">
              <h4>{platform.fullname}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlatformInfo;
