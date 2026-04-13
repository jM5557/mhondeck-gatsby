// ImageGroup.js
import React, { useState } from "react";
import { UseModal } from "./Modals";

const ImageGroup = ({ groupName, images, folderPath }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { showModal, setShowModal, ModalComponent } = UseModal();

  const downloadImage = (imageUrl) => {
    const link = document.createElement('a');
    link.href = imageUrl;

    // Extract the filename from the image URL
    const filename = imageUrl.split('/').pop();
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`group`}>
      <h3>{groupName.charAt(0).toUpperCase() + groupName.slice(1)}</h3>
      <div className="images-grid">
        {images.map((fileName, index) => (<>
          <img
            key={groupName + index}
            className={groupName} // Add classname based on type
            src={`/images/thumbs/${folderPath}/${fileName}`} // Construct image path
            alt={fileName}
            onClick={() => {
              setSelectedImage(`/images/gallery/${folderPath}/${fileName}`);
              setShowModal(!showModal)
            }}
          />
        </>
        ))}
      </div>
      <ModalComponent className="image-modal">
        <>
          <div className="image-wrapper flex align-c space-c">
            <img
              className={"modal-image " + groupName} // Add classname based on type
              src={selectedImage} // Construct image path
              alt={selectedImage}
            />
          </div>
          <br/>
          <button 
            onClick={() => downloadImage(selectedImage)}
            className="cta secondary"
          >Download</button>
        </>
      </ModalComponent>
    </div>
  );
};

export default ImageGroup;
