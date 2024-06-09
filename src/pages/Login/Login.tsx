import TextInput from '../../sharedComponents/Input/TextInput'
import './Login.scss'
import type { FC } from 'react'

const Login: FC = () => {
  return (
    <div className='login'>
      <h2>Log in</h2>
      <p>Enter your house</p>
      <div className='credentials'>
        <TextInput inputText='Email' />
        <TextInput inputText='Password' />
        <p><a href='/password-reset'>Forget password?</a></p>
        <button> Log in </button>
      </div>      
    </div>
  )
}

export default Login
