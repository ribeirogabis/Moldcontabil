import { Button } from '@/components/ui/button'
import { CustomerDocumentsTable } from '../validar/components/CustomerDocumentsTable'

const EnviarPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <CustomerDocumentsTable
        data={[
          {
            customer: 'Empresa Alpha',
            cnpj: '12.345.678/0001-90',
            quantity: 50,
            status: 'Validado',
          },
          {
            customer: 'Comercial Beta',
            cnpj: '98.765.432/0001-12',
            quantity: 30,
            status: 'Validado',
          },
          {
            customer: 'Distribuidora Gama',
            cnpj: '11.222.333/0001-44',
            quantity: 75,
            status: 'Validado',
          },
          {
            customer: 'Fornecedor Delta',
            cnpj: '22.333.444/0001-55',
            quantity: 20,
            status: 'Validado',
          },
          {
            customer: 'Indústria Épsilon',
            cnpj: '33.444.555/0001-66',
            quantity: 100,
            status: 'Validado',
          },
        ]}
      />
      <div className="flex self-end">
        <Button size="lg">Enviar</Button>
      </div>
    </div>
  )
}

export default EnviarPage
