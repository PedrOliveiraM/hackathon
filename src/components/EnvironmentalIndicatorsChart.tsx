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

interface EnvironmentalIndicatorsChartProps {
  dataChart: ChartData[]
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
            <Bar dataKey="value" fill="var(--color-desktop)" radius={8} />
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
