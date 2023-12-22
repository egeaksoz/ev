import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header component', () => {

  beforeEach(() => {
    render(<Header />)
  })

  it('should render', () => {    
    expect(screen.getByRole('header')).not.toBeNull()
  })

  it('should show the header tag', () => {
    const tag = screen.getByText('Welcome to your house')
    expect(tag).not.toBeNull();
  })

  it('should have login link', () => {
    const login = screen.getByText('Login')
    expect(login).not.toBeNull();
  })

  it('should have sign up link', () => {
    const signUp = screen.getByText('Sign Up')
    expect(signUp).not.toBeNull();
  })

})
