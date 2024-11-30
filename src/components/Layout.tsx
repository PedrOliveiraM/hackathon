// src/components/Layout.tsx
'use client'
import { Sidebar } from './Sidebar'
import { EnvironmentalIndicatorsChart } from './EnvironmentalIndicatorsChart'
import { useEffect, useState } from 'react'
import { ViaCepResponse } from '../types/ViaCepResponse'
import { ChartData } from '@/types/ChartData'

export function Layout() {
  const [cepData, setCepData] = useState<ViaCepResponse | null>(null)
  const [dataChart, setDataChart] = useState<ChartData[]>([])

  const fetchDataChart = async () => {
    // dados obtidos pela api do atila com os indicadores ambientais do cep
    const data = [
      { category: 'Poluição', value: 50 },
      { category: 'Área Verde', value: 70 },
      { category: 'Atmosfera', value: 80 },
      { category: 'Trânsito', value: 60 },
    ]
    setDataChart(data)
  }

  useEffect(() => {
    fetchDataChart()
  }, [])

  return (
    <div className="flex h-screen">
      {/* Menu Lateral */}
      <Sidebar setCepData={setCepData} />

      {/* Container Central para os gráficos */}
      <div className="flex-1 bg-gray-100 p-6">
        <h1 className="mb-4 text-3xl font-semibold">Indicadores Ambientais</h1>

        {/* Exibe os dados do CEP e os gráficos */}
        {cepData ? (
          <div>
            <h2>
              Endereço: {cepData.logradouro}, {cepData.bairro},{' '}
              {cepData.localidade} - {cepData.uf}
            </h2>
            <EnvironmentalIndicatorsChart dataChart={dataChart} />
          </div>
        ) : (
          <p className="text-lg text-gray-700">
            Busque um CEP para exibir os dados.
          </p>
        )}
      </div>
    </div>
  )
}