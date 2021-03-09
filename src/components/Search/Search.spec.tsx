import { screen, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '../../util/mock/router.mock'
import Search from '.'

describe('Search', () => {
  it('should render Search', async () => {
    const pathname = ''
    render(<Search pathname={pathname} />)

    const nodeSearch = await waitFor(() => screen.getByTestId('search'))
    expect(nodeSearch).toBeTruthy()

    const nodeInput: HTMLElement = await waitFor(() =>
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
  })
})
