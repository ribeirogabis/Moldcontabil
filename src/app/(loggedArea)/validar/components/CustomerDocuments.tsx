'use client'
import { DataTable } from '@/components/DataTable'
import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'

type CustomerDocumentsType = {
  id: string
  customer: string
  cnpj: string
  chartOfAccount: string
  status: string
}

const columns: ColumnDef<CustomerDocumentsType>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
  },
  {
    accessorKey: 'customer',
    header: 'Cliente',
  },
  {
    accessorKey: 'cnpj',
    header: 'CNPJ/CPF',
  },
  {
    accessorKey: 'chartOfAccount',
    header: 'Plano de Contas',
  },
]

type CustomerDocumentsTablePropsType = {
  data: CustomerDocumentsType[]
}

export const CustomerDocumentsTable = ({
  data,
}: CustomerDocumentsTablePropsType) => {
  return (
    <DataTable<CustomerDocumentsType, CustomerDocumentsType>
      columns={columns}
      data={data}
    />
  )
}
