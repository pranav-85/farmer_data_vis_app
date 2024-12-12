import React from "react";
import "./App.css";
import ImageUploader from "./components/ImageUploader";
import MapVisualizer from "./components/MapVisualizer"; 

function App() {
  return (
    <div className="app-container">
      <MapVisualizer />
      <ImageUploader />
    </div>
  );
}

export default App;
