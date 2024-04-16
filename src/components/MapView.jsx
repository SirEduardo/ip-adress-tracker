import { MapContainer, TileLayer, Marker, Popup, useMap } from "leaflet";
import { useEffect, useState, useRef } from "react";
import 'leaflet/dist/leaflet.css'

const MapView = () => {
  const mapRef = useRef();
  


  return (
    <MapContainer ref={mapRef} center={{ lat: "51.52437", lng: "13.41053" }} zoom={13}>
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
    </MapContainer>
  );
};

export default MapView;
