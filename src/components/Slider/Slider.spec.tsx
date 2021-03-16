import { screen } from '@testing-library/react'
import { renderWithTheme as render } from '../../util/mock/theme.mock'

import Slider, { IPropsItem } from './Slider'

describe('<Slider />', () => {
  it('should render Slider', async () => {
    const title = 'slider test'
    const items = [
      {
        color: '#000',
        url: 'http://',
        name: 'test 1'
      },
      {
        color: '#F00',
        url: 'http://',
        name: 'test 2'
      }
    ] as IPropsItem[]

    const { container } = render(<Slider title={title} items={items} />)

    expect(
      screen.getByRole('heading', {
        name: /slider test/i
      })
    ).toBeTruthy()

    expect(
      container.querySelector('div > div > div > div > div:nth-child(1)')
    ).toBeTruthy()

    expect(
      container.querySelector('div > div > div > div > div:nth-child(2)')
    ).toBeTruthy()
  })
})
