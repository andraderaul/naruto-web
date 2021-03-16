import { screen, waitFor, render } from '@testing-library/react'
import Shape from '.'

describe('<Shape />', () => {
  it('should render Shape', async () => {
    const { container } = render(<Shape />)

    const nodeShape = await waitFor(() => screen.getByTestId('shape'))
    expect(nodeShape).toBeTruthy()
    expect(container.querySelector('div > div > svg > path')).toBeTruthy()
  })
})
