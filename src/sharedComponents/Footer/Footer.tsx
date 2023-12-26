import './Footer.scss'
import type { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer>
        <p> © 2023 Ege Aksoz <span> - Our house in the middle of our street </span></p>
        <a href='https://github.com/egeaksoz/ev'><img src='github-mark.png' /></a>
    </footer>
  )
}

export default Footer
