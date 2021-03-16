import { screen } from '@testing-library/react'
import { renderWithTheme as render } from '../../util/mock/theme.mock'

import SlideItem from '.'

describe('<SlideItem />', () => {
  it('should render SlideItem', () => {
    const name = 'test'
    const color = 'rgb(0, 0, 255)'
    const url = 'http://'

    const { container } = render(
      <SlideItem name={name} color={color} url={url} />
    )

    expect(screen.getByText(/test/i)).toBeTruthy()

    const style = window.getComputedStyle(container?.firstChild as Element)
    expect(style?.backgroundColor).toBe(color)
  })
})
