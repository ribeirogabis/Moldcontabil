'use client'
import { DataTable } from '@/components/DataTable'
import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'

type CustomerDocumentsType = {
  customer: string
  cnpj: string
  quantity: number
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
    accessorKey: 'quantity',
    header: 'Qtd de Documentos',
  },
  {
    accessorKey: 'status',
    header: 'Status',
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
