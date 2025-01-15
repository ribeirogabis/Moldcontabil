'use client'
import { DataTable } from '@/components/DataTable'
import { Status } from '@/constants'
import { ColumnDef } from '@tanstack/react-table'

type TickerPerAgent = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [key in keyof typeof Status]: number
} & {
  agentName: string
}

const columns: ColumnDef<TickerPerAgent>[] = [
  {
    accessorKey: 'agentName',
    header: 'Atendente',
  },
  ...Object.entries(Status).map<ColumnDef<TickerPerAgent>>(([key, value]) => ({
    accessorKey: key,
    header: value,
    cell: ({ row }) =>
      `${row.original[key as keyof TickerPerAgent]}`.padStart(2, '0'),
  })),
]

type TicketPerAgentTablePropsType = {
  data: TickerPerAgent[]
}

export const TicketPerAgentTable = ({ data }: TicketPerAgentTablePropsType) => {
  return (
    <div className="flex flex-col gap-2 bg-slate-100 rounded-lg p-4 h-full">
      <p className="text-xl font-bold">Ticket por atendente</p>
      <DataTable<TickerPerAgent, TickerPerAgent>
        columns={columns}
        data={data}
      />
    </div>
  )
}
