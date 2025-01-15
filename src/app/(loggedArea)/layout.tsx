import { PropsWithChildren } from 'react'
import { Header } from './components/Header'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="px-8 py-4 flex flex-col gap-4 h-full">
      <Header />
      <hr />
      {children}
    </div>
  )
}

export default Layout
