import './Header.scss'
import Logo from '../Logo'
import { useRef, type FC, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header: FC = () => {
  const [menuToggle, setMenu] = useState(false)
  const navRef = useRef<HTMLUListElement>(null)

  const toggleMenu = () => {
    navRef.current!.classList.toggle('mobile-nav')
    setMenu(!menuToggle)
  }

  return (
    <header>
      <Logo />
        <p className='tag'> Welcome to your house </p>
        <button className='mobile-nav-toggle' onClick={toggleMenu}>
          {menuToggle ? <CloseIcon/> : <MenuIcon/> }
          <span className='sr-only'>Menu</span>
        </button>
        <nav>
          <ul className='primary-navigation flex' ref={navRef}>
            <li className='active'><a href='/login'> Login </a></li>
            <li><a href='/signup'> Sign Up </a></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header
