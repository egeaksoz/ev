import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import type { ReactNode } from 'react'
import './Layout.scss'

interface Props {
  children?: ReactNode
}

export default function Layout ({ children }: Props): JSX.Element {
  return (
    <div className='layout'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
