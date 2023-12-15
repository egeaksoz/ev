import type { FC } from 'react'

const Logo: FC = () => {
  return (
    <div data-testid="logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
        <a href="/">
          <rect width="100" height="100"/>
            <path d="M75,55 h5 a1,1 0 0 0 1,-1 v-7 a1,1 0 0 0 -1,-1 h-4 a1,1 0 0 0 -1,1 Z" fill="black"/>
            <path d="M60,40 L30,60  L35,65 L60,47 L85,65 L90,60 Z" fill="#AA4A44"/>
        </a>
      </svg>
    </div>
  )
}

export default Logo
