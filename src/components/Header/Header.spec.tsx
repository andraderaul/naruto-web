import userEvent from '@testing-library/user-event'
import { screen, waitFor } from '@testing-library/react'
import { render } from '../../util/mock/router.mock'
import Header from '.'

describe('<Header/>', () => {
  it('should render Header', async () => {
    render(<Header />)
    const nodeHeader = await waitFor(() => screen.getByTestId('header'))
    expect(nodeHeader).toBeTruthy()

    const nodeLink = await waitFor(() =>
      screen.getByRole('link', {
        name: /characters/i
      })
    )
    expect(nodeLink).toBeTruthy()
    userEvent.click(nodeLink)

    expect(
      screen.getByRole('link', {
        name: /jutsus/i
      })
    ).toBeTruthy()

    expect(
      screen.getByRole('link', {
        name: /teams/i
      })
    ).toBeTruthy()

    expect(
      screen.getByRole('link', {
        name: /naruto web/i
      })
    ).toBeTruthy()
  })
})
