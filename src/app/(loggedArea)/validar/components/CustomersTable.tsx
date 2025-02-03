'use client'
import { DataTable } from '@/components/DataTable'
// import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import { useRouter } from 'next/navigation'

type CustomerType = {
  id: string
  customer: string
  cnpj: string
  quantity: number
  status: string
}

const columns: ColumnDef<CustomerType>[] = [
  // {
  //   id: 'select',
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && 'indeterminate')
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //     />
  //   ),
  // },
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

type CustomerTablePropsType = {
  data: CustomerType[]
}

export const CustomerTable = ({ data }: CustomerTablePropsType) => {
  const router = useRouter()

  return (
    <DataTable<CustomerType, CustomerType>
      columns={columns}
      data={data}
      onRowClick={(data) => {
        router.push(`/validar/${data.id}`)
      }}
    />
  )
}
