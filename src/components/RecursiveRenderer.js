import React from "react";
import ImageGroup from "./ImageGroup";
import platforms from "@data/platforms";

const RecursiveRenderer = ({ data, folderPath }) => {
  return (
    <>
      {Object.keys(data).map(key => {
        const value = data[key];

        const boxTitle = 
            Object.keys(platforms).includes(key) 
                ? platforms[key].fullname
                : key.charAt(0).toUpperCase() + key.slice(1);

        // If the value is an array, render it using ImageGroup
        if (Array.isArray(value) && value.length > 0) {
          return (
            <ImageGroup 
              key={key} 
              groupName={key} 
              images={value} 
              folderPath={folderPath} 
            />
          );
        }

        if (Array.isArray(value) && value.length === 0) {
            return (<></>)
        }
        
        // If the value is an object, render recursively
        if (typeof value === "object" && value !== null) {
          return (
            <div key={key} className={`${key} box`}>
              <h3>{boxTitle}</h3>
              <div className="subfolder-images">
                <RecursiveRenderer 
                  data={value} 
                  folderPath={`${folderPath}/${key}`} 
                />
              </div>
            </div>
          );
        }
        
        return null; // Skip rendering if it's neither an array nor an object
      })}
    </>
  );
};

export default RecursiveRenderer;
