import React from "react";

const HomeGallery = ({images}) => {
    return (
        <div className="gallery no-scrollbar">
            {images.map((img, i)=> (
                <img alt = {`Image ${i}`} src = {img} />
            ))}
        </div>
    )
}

export default HomeGallery;