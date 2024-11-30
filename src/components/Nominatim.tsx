'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

interface GeoMapProps {
  cep: string
}

export default function GeoMap({ cep }: GeoMapProps) {
  const [center, setCenter] = useState<[number, number] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (cep) fetchCoordinates(cep)
  }, [cep])

  // Função para buscar coordenadas
  const fetchCoordinates = async (cep: string) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${cep}&format=json`,
      )
      const data = await response.json()
      if (data && data.length > 0) {
        const { lat, lon } = data[0]
        setCenter([parseFloat(lat), parseFloat(lon)])
        setError(null)
      } else {
        setError('CEP não encontrado.')
        setCenter(null)
      }
    } catch (error) {
      console.error(error)
      setError('Erro ao buscar coordenadas.')
      setCenter(null)
    }
  }

  return (
    <div>
      <div style={{ height: '500px', width: '100%' }}>
        {center ? (
          <MapContainer
            center={center}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={center} />
          </MapContainer>
        ) : error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <p>Carregando o mapa...</p>
        )}
      </div>
    </div>
  )
}
