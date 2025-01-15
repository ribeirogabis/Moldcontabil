import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

const AIAnalysisPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex gap-4 items-start">
        <Card className="flex-1 flex flex-col gap-2 p-4">
          <p className="text-2xl font-bold">Documento recebido</p>
          <Image
            alt="document"
            src="/document-example.png"
            width={128}
            height={256}
            className="size-full"
          />
        </Card>
        <Card className="flex-1 flex flex-col gap-2 p-4">
          <p className="text-2xl font-bold">Análise IA</p>
          <div className="flex flex-col gap-2 text-xlg uppercase">
            <div>
              <span className="font-bold">ID:</span> 0008
            </div>
            <div>
              <span className="font-bold">CNPJ:</span> 98.765.432/0001-12
            </div>
            <div>
              <span className="font-bold">Plano de contas:</span> 080-DESPESA
              ADM
            </div>
            <div>
              <span className="font-bold">Razão social:</span> Comercial Beta
            </div>
          </div>
        </Card>
      </div>
      <p className="self-center">1 / 300</p>
      <Button className="self-end" size="lg">
        Validar
      </Button>
    </div>
  )
}

export default AIAnalysisPage
