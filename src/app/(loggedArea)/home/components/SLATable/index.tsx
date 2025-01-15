'use client'
import { DataTable } from '@/components/DataTable'
import { Status } from '@/constants'
import { ColumnDef } from '@tanstack/react-table'

type SLAStatus = {
  status: keyof typeof Status
  quantity: number
}

const columns: ColumnDef<SLAStatus>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <div>{Status[row.original.status]}</div>,
  },
  {
    accessorKey: 'quantity',
    header: 'Quantidade',
    cell: ({ row }) => <div>{`${row.original.quantity}`.padStart(3, '0')}</div>,
  },
]

type SLATablePropsType = {
  data: SLAStatus[]
}

export const SLATable = ({ data }: SLATablePropsType) => {
  return (
    <div className="flex flex-col gap-2 bg-slate-100 rounded-lg p-4 h-full">
      <p className="text-xl font-bold">Hoje</p>
      <DataTable<SLAStatus, SLAStatus> columns={columns} data={data} />
    </div>
  )
}
