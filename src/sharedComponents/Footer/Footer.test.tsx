import { render } from '@testing-library/react'
import Footer from './Footer'

describe('Footer component', () => {
  it('should render', () => {
    const { container } = render(<Footer />)
    expect(container.querySelector('footer')).toBeTruthy()
  })

  it('should show the copyright text', () => {
    const { getByText } = render(<Footer />)
    expect(getByText('© 2023 Ege Aksoz - Our house in the middle of our street')).toBeTruthy()
  })

  it('should show the github icon', () => {
    const { container } = render(<Footer />)
    expect((container.querySelector('img') as HTMLImageElement).src).toContain('github')
  })
})
