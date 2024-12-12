import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function MapVisualizer() {
  const [pins, setPins] = useState([
    {
      id: 1,
      lat: 28.6139,
      lng: 77.2090,
      title: "New Delhi",
      farmerId: "41730",
      farmerName: "Archana Pr",
      imageUrl: "https://via.placeholder.com/150" // Placeholder image URL
    },
    {
      id: 2,
      lat: 19.0760,
      lng: 72.8777,
      title: "Mumbai",
      farmerId: "41844",
      farmerName: "Arjun Udha",
      imageUrl: "https://via.placeholder.com/150" // Placeholder image URL
    },
    {
      id: 3,
      lat: 13.0827,
      lng: 80.2707,
      title: "Chennai",
      farmerId: "41955",
      farmerName: "Ravi Kumar",
      imageUrl: "https://via.placeholder.com/150" // Placeholder image URL
    },
    {
      id: 4,
      lat: 12.9716,
      lng: 77.5946,
      title: "Bangalore",
      farmerId: "42067",
      farmerName: "Sita Devi",
      imageUrl: "https://via.placeholder.com/150" // Placeholder image URL
    },
    {
      id: 5,
      lat: 22.5726,
      lng: 88.3639,
      title: "Kolkata",
      farmerId: "42189",
      farmerName: "Anil Gupta",
      imageUrl: "https://via.placeholder.com/150" // Placeholder image URL
    },
  ]);

  const handleDelete = (id) => {
    const Confirmation = window.confirm("Are you sure you want to delete this marker?");
      if (Confirmation) {
        // Delete the pin after double confirmation
        setPins(pins.filter((pin) => pin.id !== id));
      }
  };

  return (
    <div className="map-container">
      <h2>Map with Farmer Details</h2>
      <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "40em", width: "40vw" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {pins.map((pin) => (
          <Marker
            key={pin.id}
            position={[pin.lat, pin.lng]}
            icon={L.icon({
              iconUrl: "https://img.icons8.com/?size=100&id=80254&format=png&color=000000",
              iconSize: [25, 25],
            })}
          >
            <Popup>
              <h3>{pin.title}</h3>
              <p>
                <strong>Farmer ID:</strong> {pin.farmerId}
              </p>
              <p>
                <strong>Farmer Name:</strong> {pin.farmerName}
              </p>
              <p>
                <strong>Image:</strong><br />
                <a href={pin.imageUrl} target="_blank" rel="noopener noreferrer">
                  <img src={pin.imageUrl} alt="Farmer" style={{ width: "100px", height: "auto" }} />
                </a>
              </p>
              <button onClick={() => handleDelete(pin.id)}>Delete</button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapVisualizer;
