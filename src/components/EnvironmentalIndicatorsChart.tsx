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
import { ChartData } from '@/types/ChartData'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

const chartConfig = {
  desktop: {
    label: 'Indicadores Ambientais',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

// Interface para os dados do gráfico
interface EnvironmentalIndicatorsChartProps {
  dataChart: ChartData[] // Os dados a serem passados para o gráfico
}

// Função para definir a cor das barras
const getBarColor = (category: string) => {
  switch (category) {
    case 'Poluição':
      return '#ff4d4d' // Vermelho
    case 'Área Verde':
      return '#4caf50' // Verde
    case 'Atmosfera':
      return '#2196f3' // Azul
    case 'Trânsito':
      return '#ff9800' // Laranja
    default:
      return '#8884d8' // Cor padrão
  }
}

export function EnvironmentalIndicatorsChart({
  dataChart,
}: EnvironmentalIndicatorsChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Indicadores Ambientais</CardTitle>
        <CardDescription>
          Poluição, Área Verde, Atmosfera e Trânsito
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
            {dataChart.map((entry) => (
              <Bar
                key={entry.category} // Adicionando a chave única para cada barra
                dataKey="value"
                fill={getBarColor(entry.category)} // Define a cor conforme a categoria
                radius={8}
              />
            ))}
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Tendência de alta de 5,2% neste mês
        </div>
        <div className="leading-none text-muted-foreground">
          Dados apresentados para o último mês
        </div>
      </CardFooter>
    </Card>
  )
}
