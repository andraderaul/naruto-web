import { screen, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '../../util/mock/router.mock'
import Search from '.'

describe('Search', () => {
  it('should render Search', async () => {
    const pathname = ''
    const { container } = render(<Search pathname={pathname} />)

    const nodeSearch = await waitFor(() => screen.getByTestId('search'))
    expect(nodeSearch).toBeTruthy()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const nodeInput: any = await waitFor(() =>
      screen.getByTestId('input-search')
    )
    expect(nodeInput).toBeTruthy()
    const inputValue = 'test'
    userEvent.type(nodeInput, inputValue)
    expect(nodeInput.value).toBe(inputValue)

    fireEvent.keyDown(nodeInput, {
      key: 'Enter',
      keyCode: 13
    })

    expect(screen.getByText(/filter by/i)).toBeTruthy()
    expect(container.querySelector('div > div > div > svg')).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()
  })
})
