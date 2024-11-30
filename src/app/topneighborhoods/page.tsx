'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { BairroData, dataNeighborhoods } from '@/utils/dataNeighborhoods'
import { useEffect, useState } from 'react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

const chartConfig = {
  desktop: {
    label: 'Indicadores Ambientais',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export default function TopRankingCeps() {
  const [topBairros, setTopBairros] = useState<BairroData[]>([])

  useEffect(() => {
    // Simulação de dados com os nomes fornecidos
    const simulatedData: BairroData[] = dataNeighborhoods
    // Ordenar pela pontuação total e pegar os 10 primeiros
    const sortedData = simulatedData
      .sort((a, b) => b.pontuacaoTotal - a.pontuacaoTotal)
      .slice(0, 10)

    setTopBairros(sortedData)
  }, [])

  const dataChart = topBairros.map((bairro) => ({
    category: bairro.nomeBairro,
    value: bairro.pontuacaoTotal,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 10 Melhores Bairros - Goiás</CardTitle>
        <CardDescription>
          Ranking baseado na pontuação total dos indicadores
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={dataChart}>
            <CartesianGrid vertical={false} stroke="#ccc" />
            <XAxis
              dataKey="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <YAxis hide />
            <ChartTooltip
              content={<ChartTooltipContent hideLabel />}
              cursor={false}
            />
            <Bar dataKey="value" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Ranking dos melhores locais em relação a indicadores ambientais
        </div>
        <div className="leading-none text-muted-foreground">
          Dados apresentados com base na pontuação total
        </div>
      </CardFooter>
    </Card>
  )
}
