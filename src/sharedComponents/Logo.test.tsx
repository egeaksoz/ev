import { render } from '@testing-library/react'
import Logo from './Logo'

describe('Logo component', () => {
  it('should render', () => {
    const { getByTestId } = render(<Logo />)
    expect(getByTestId('logo')).toBeTruthy()
  })
})
