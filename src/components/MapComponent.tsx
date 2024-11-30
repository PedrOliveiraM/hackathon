'use client'

import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Polygon } from 'react-leaflet'

const HighlightArea = () => {
  // Coordenadas da área (tuplos com dois elementos)
  const areaCoordinates: [number, number][] = [
    [51.51, -0.12], // Ponto 1
    [51.51, -0.08], // Ponto 2
    [51.505, -0.08], // Ponto 3
    [51.505, -0.12], // Ponto 4
  ]

  return (
    <Polygon
      positions={areaCoordinates}
      pathOptions={{
        color: 'green', // Cor da borda
        fillColor: 'green', // Cor do preenchimento
        fillOpacity: 0.4, // Opacidade do preenchimento
      }}
    />
  )
}

const MapComponent = () => {
  return (
    <MapContainer
      style={{ height: '100vh', width: '100%' }}
      center={[51.51, -0.1]} // Centro do mapa
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <HighlightArea />
    </MapContainer>
  )
}

export default MapComponent
