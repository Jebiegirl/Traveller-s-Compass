import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';

// Fix for Leaflet marker icons in React
const defaultIcon = new Icon({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Custom icon for destination with golden color
const destinationIcon = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Helper component to fit map to bounds
function SetBoundsAndView({ center, destination, zoom }: { 
  center: [number, number], 
  destination?: [number, number], 
  zoom: number 
}) {
  const map = useMap();
  
  useEffect(() => {
    if (destination) {
      const bounds = [center, destination];
      map.fitBounds(bounds);
    } else {
      map.setView(center, zoom);
    }
  }, [map, center, destination, zoom]);
  
  return null;
}

interface MapProps {
  center: [number, number];
  destination?: [number, number];
  zoom?: number;
  className?: string;
}

export function Map({ center, destination, zoom = 13, className = 'h-96' }: MapProps) {
  return (
    <MapContainer 
      center={center} 
      zoom={zoom} 
      className={className}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <Marker position={center} icon={defaultIcon}>
        <Popup>Your current location</Popup>
      </Marker>
      
      {destination && (
        <>
          <Marker position={destination} icon={destinationIcon}>
            <Popup>Destination</Popup>
          </Marker>
          
          <Polyline 
            positions={[center, destination]} 
            pathOptions={{ color: '#f59e0b', weight: 4, opacity: 0.7 }} 
          />
        </>
      )}
      
      <SetBoundsAndView center={center} destination={destination} zoom={zoom} />
    </MapContainer>
  );
}