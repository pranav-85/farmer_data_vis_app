import React, { useState } from "react";
import "./ImageUploader.css";

function ImageUploader() {
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState({});
  const [farmerData, setFarmerData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); 
        extractData(file.name);
        setIsSubmitted(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const extractData = (fileName) => {
    const dummyData = {
      fileName,
      size: Math.floor(Math.random() * 1000) + " KB",
      uploadedAt: new Date().toLocaleString(),
    };
    setImageData(dummyData);

    const dummyFarmerData = {
      farmerName: "John Doe", 
      farmerId: "12345",
    };
    setFarmerData(dummyFarmerData);
  };

  const handleSubmit = () => {
    if (image) {
      setIsSubmitted(true);
    } else {
      alert("Please upload an image first.");
    }
  };

  return (
    <div className="image-uploader-container">
      <h1 className="header-text">Image Upload & Data Viewer</h1>

      <div className="upload-section">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="upload-input"
        />
        <button className="submit-button" onClick={handleSubmit}>
        Submit Image
      </button>
      </div>
      
      {image && (
        <div className="image-info-container">
          <div className="image-preview">
            <img src={image} alt="Uploaded preview" />
          </div>
          {isSubmitted && (
            <div className="data-display">
              <h2>Extracted Data:</h2>
              <p>
                <strong>File Name:</strong> {imageData.fileName}
              </p>
              <p>
                <strong>Size:</strong> {imageData.size}
              </p>
              <p>
                <strong>Uploaded At:</strong> {imageData.uploadedAt}
              </p>

              <div className="farmer-data-display">
                <h2>Farmer Information:</h2>
                <p>
                  <strong>Farmer Name:</strong> {farmerData.farmerName}
                </p>
                <p>
                  <strong>Farmer ID:</strong> {farmerData.farmerId}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
