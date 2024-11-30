'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.heat'
import L from 'leaflet'

// Configurando ícones personalizados
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

interface GeoMapProps {
  cep: string
}

export default function GeoMap({ cep }: GeoMapProps) {
  const [center, setCenter] = useState<[number, number] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [heatData, setHeatData] = useState<[number, number, number][]>([])

  useEffect(() => {
    if (cep) fetchCoordinates(cep)
  }, [cep])

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

        // Adicione coordenadas para o heatmap
        setHeatData([
          [parseFloat(lat), parseFloat(lon), 0.8], // Intensity de 0 a 1
        ])
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

  function HeatmapLayer({ data }: { data: [number, number, number][] }) {
    const map = useMap()

    useEffect(() => {
      if (data.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const heatLayer = (window as any).L.heatLayer(data, {
          radius: 200, // Tamanho do ponto
          blur: 40, // Suavização
          maxZoom: 18,
          gradient: {
            0.0: 'black',
            0.2: 'red',
          },
        })
        heatLayer.addTo(map)

        // Remove o heatmap ao desmontar o componente
        return () => {
          map.removeLayer(heatLayer)
        }
      }
    }, [data, map])

    return null
  }

  return (
    <div>
      <div style={{ height: '500px', width: '100%' }}>
        {center ? (
          <MapContainer
            center={center}
            zoom={center ? 15 : 13}
            style={{ height: '100%', width: '100%' }}
            maxZoom={center ? 15 : 13}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={center} />
            <HeatmapLayer data={heatData} />
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
