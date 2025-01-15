import { Card } from '@/components/ui/card'
import { SummaryItem } from './SummaryItem'

export const TicketSummary = () => {
  return (
    <div className="flex flex-col gap-2 bg-slate-100 rounded-lg p-4 h-full">
      <p className="text-xl font-bold">Ticket mensal</p>
      <Card className="p-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <SummaryItem
              iconSrc="https://placehold.co/64x64/gray/white.png"
              title="Ticket Fechados"
              value={3840}
            />
            <SummaryItem
              iconSrc="https://placehold.co/64x64/gray/white.png"
              title="Fechados no dia (via telefone)"
              value={2986}
            />
          </div>
          <div className="flex gap-4">
            <SummaryItem
              iconSrc="https://placehold.co/64x64/gray/white.png"
              title="Ticket Fechados"
              value={3840}
            />
            <SummaryItem
              iconSrc="https://placehold.co/64x64/gray/white.png"
              title="Fechados no dia (via telefone)"
              value={2986}
            />
          </div>
        </div>
      </Card>
    </div>
  )
}
