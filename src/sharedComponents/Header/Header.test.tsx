import { render } from '@testing-library/react'
import Header from './Header'

describe('Header component', () => {
  it('should render', () => {
    const { getByRole } = render(<Header />)
    expect(getByRole('header')).toBeTruthy()
  })

  it('should show the header tag', () => {
    const { getByText } = render(<Header />)
    expect(getByText('Welcome to your house')).toBeTruthy()
  })

  it('should show the login and signup links', () => {
    const { getByText } = render(<Header />)
    expect(getByText('Login')).toBeTruthy()
    expect(getByText('Sign Up')).toBeTruthy()
  })
})
