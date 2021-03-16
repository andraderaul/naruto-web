import userEvent from '@testing-library/user-event'
import { screen, waitFor } from '@testing-library/react'
import { render } from '../../util/mock/router.mock'
import Card from '.'

describe('<Card />', () => {
  const src = 'src'
  const name = 'test'
  const id = 'guid'
  const onClick = jest.fn()
  it('should render Card', async () => {
    render(<Card src={src} name={name} id={id} onClick={onClick} />)
    const nodeCard = await waitFor(() => screen.getByTestId('card'))
    expect(nodeCard).toBeTruthy()
    userEvent.click(nodeCard)
    expect(onClick).toHaveBeenCalled()
    expect(
      screen.getByRole('img', {
        name: /test/i
      })
    ).toBeTruthy()
    expect(screen.getByText(/test/i)).toBeTruthy()
  })

  it('should render Card without img', async () => {
    render(<Card name={name} id={id} onClick={onClick} />)
    const nodeCard = await waitFor(() => screen.getByTestId('card'))
    expect(nodeCard).toBeTruthy()
  })
})
