import Image from 'next/image'
import { Item } from './Item'

export const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <div className="rounded-lg overflow-hidden">
          <Image alt="logo" src="/logo.jpeg" width={64} height={64} />
        </div>
        <p className="text-2xl font-bold uppercase">MoldContabil</p>
      </div>
      <ul className="flex items-center gap-8">
        <Item href="/home">Home</Item>
        <Item href="/validar">Validar</Item>
        <Item href="/enviar">Enviar</Item>
        <Item href="/plano-de-contas">Plano de contas</Item>
        <Item href="/suporte">Suporte</Item>
      </ul>
    </div>
  )
}
