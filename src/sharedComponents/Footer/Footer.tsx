import './Footer.scss'
import type { FC } from 'react'

const currentYear = new Date().getFullYear()

const Footer: FC = () => {
  return (
    <footer>
        <p> © {currentYear} Ege Aksoz <span className='motto'> - Our house in the middle of our street </span></p>
        <a href='https://github.com/egeaksoz/ev'><img src='github-mark.png' /></a>
    </footer>
  )
}

export default Footer
