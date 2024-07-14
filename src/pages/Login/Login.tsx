import InputBox from '../../sharedComponents/Input/InputBox'
import './Login.scss'
import type { FC } from 'react'

const Login: FC = () => {
  return (
    <div className='login'>
      <h2>Log in</h2>
      <p>Enter your house</p>
      <div className='credentials'>
        <InputBox type='email' />
        <InputBox type='password' />
        <p><a href='/password-reset'>Forget password?</a></p>
        <button> Log in </button>
      </div>
      <div className='join'> New house member? <a href='/signup'> Sign Up </a> </div>
    </div>
  )
}

export default Login
