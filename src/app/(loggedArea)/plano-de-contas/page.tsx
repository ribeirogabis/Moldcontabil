import { Card } from '@/components/ui/card'
import { Upload } from 'lucide-react'

const PlanoDeContasPage = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Card className="p-4 flex flex-col gap-1 items-center">
        <p className="text-xl uppercase">upload</p>
        <p className="text-md mb-4">Atualizar plano de contas</p>
        <Upload size={64} />
      </Card>
    </div>
  )
}

export default PlanoDeContasPage
