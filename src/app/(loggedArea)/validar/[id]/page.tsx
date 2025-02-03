'use client'

import { Button } from '@/components/ui/button'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { CustomerDocumentsTable } from '../components/CustomerDocuments'

const ValidateCustomerPage = () => {
  const { id } = useParams()

  console.log(id)

  return (
    <div className="p-4 flex flex-col gap-4">
      <CustomerDocumentsTable
        data={[
          {
            id: '1',
            customer: 'Empresa Alpha',
            cnpj: '12.345.678/0001-90',
            chartOfAccount: 'Plano de Contas 1',
            status: 'Pendente',
          },
          {
            id: '2',
            customer: 'Comercial Beta',
            cnpj: '98.765.432/0001-12',
            chartOfAccount: 'Plano de Contas 2',
            status: 'Pendente',
          },
          {
            id: '3',
            customer: 'Distribuidora Gama',
            cnpj: '11.222.333/0001-44',
            chartOfAccount: 'Plano de Contas 3',
            status: 'Pendente',
          },
          {
            id: '4',
            customer: 'Fornecedor Delta',
            cnpj: '22.333.444/0001-55',
            chartOfAccount: 'Plano de Contas 4',
            status: 'Pendente',
          },
          {
            id: '5',
            customer: 'Indústria Épsilon',
            cnpj: '33.444.555/0001-66',
            chartOfAccount: 'Plano de Contas 5',
            status: 'Pendente',
          },
        ]}
      />
      <div className="flex justify-end">
        <Link href="/validar/analise-ia">
          <Button size="lg">Validar</Button>
        </Link>
      </div>
    </div>
  )
}

export default ValidateCustomerPage
