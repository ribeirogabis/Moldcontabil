import { Button } from '@/components/ui/button'
import { CustomerDocumentsTable } from './components/CustomerDocumentsTable'
import Link from 'next/link'

const ValidatePage = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <CustomerDocumentsTable
        data={[
          {
            customer: 'Empresa Alpha',
            cnpj: '12.345.678/0001-90',
            quantity: 50,
            status: 'Pendente validação',
          },
          {
            customer: 'Comercial Beta',
            cnpj: '98.765.432/0001-12',
            quantity: 30,
            status: 'Pendente validação',
          },
          {
            customer: 'Distribuidora Gama',
            cnpj: '11.222.333/0001-44',
            quantity: 75,
            status: 'Pendente validação',
          },
          {
            customer: 'Fornecedor Delta',
            cnpj: '22.333.444/0001-55',
            quantity: 20,
            status: 'Pendente validação',
          },
          {
            customer: 'Indústria Épsilon',
            cnpj: '33.444.555/0001-66',
            quantity: 100,
            status: 'Pendente validação',
          },
        ]}
      />
      <div className="flex justify-between">
        <Button size="lg">Validar e enviar</Button>
        <Link href="/validar/analise-ia">
        <Button size="lg">Validar</Button>
        </Link>
      </div>
    </div>
  )
}

export default ValidatePage
