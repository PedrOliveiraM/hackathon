'use client'
import { Sidebar } from './Sidebar'
import { EnvironmentalIndicatorsChart } from './EnvironmentalIndicatorsChart'
import { useEffect, useState } from 'react'
import { ViaCepResponse } from '../types/ViaCepResponse'
import { ChartData } from '@/types/ChartData'
import GeoMap from './Nominatim'
import TopRankingCeps from '@/app/topneighborhoods/page'
import { Footer } from './Footer'

export function Layout() {
  const [cepData, setCepData] = useState<ViaCepResponse | null>(null)
  const [dataChart, setDataChart] = useState<ChartData | null>(null)

  const fetchDataChart = async () => {
    // buscar pelo cep
    const data = {
      mediaAreaVerde: 78.14763376915768,
      mediaEstruturaDeServicos: 30.97243666278705,
      mediaDensidadePopulacional: 11.884295267776913,
      mediaPontuacaoTotal: 34.51866541974996,
    }

    setDataChart(data)
  }

  useEffect(() => {
    fetchDataChart()
  }, [])

  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <Sidebar setCepData={setCepData} />
        <div className="flex-1 bg-gray-100 p-6">
          <h1 className="mb-4 text-3xl font-semibold">
            Indicadores Ambientais
          </h1>
          {cepData ? (
            <div className="max-w-8/12 flex w-full flex-col gap-3">
              <div>
                <h2>
                  Endereço: {cepData.logradouro}, {cepData.bairro},{' '}
                  {cepData.localidade} - {cepData.uf}
                </h2>
                <EnvironmentalIndicatorsChart dataChart={dataChart} />
              </div>
              <h1 className="mb-4 text-3xl font-semibold">Mapa</h1>
              <GeoMap cep={cepData.cep} />
            </div>
          ) : (
            <TopRankingCeps />
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
