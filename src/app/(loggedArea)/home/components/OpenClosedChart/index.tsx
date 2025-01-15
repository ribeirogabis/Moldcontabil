import { Card } from '@/components/ui/card'
import { BarChart } from './BarChart'

export const OpenClosedChart = () => {
  return (
    <div className="flex flex-col gap-2 h-full bg-slate-100 rounded-lg p-4 h-full">
      <p className="text-xl font-bold">Abertos x Fechados</p>
      <Card className="flex-1">
        <BarChart />
      </Card>
    </div>
  )
}
