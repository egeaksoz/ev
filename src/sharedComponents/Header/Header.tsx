import './Header.scss'
import Logo from '../Logo'
import type { FC } from 'react'

const Header: FC = () => {
  return (
    <header>
      <Logo />
        <p className="tag"> Welcome to your house </p>
          <nav>
            <a href="/login"> Login </a>
            <a href="/signup"> Sign Up </a>
          </nav>
    </header>
  )
}

export default Header
