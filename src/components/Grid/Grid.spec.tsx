import { screen, waitFor, render } from '@testing-library/react'
import Grid from '.'

describe('<Grid />', () => {
  it('should render Grid', async () => {
    const children = 'test children'
    render(<Grid>{children}</Grid>)

    const nodeGrid = await waitFor(() => screen.getByTestId('grid'))
    expect(nodeGrid).toBeTruthy()

    const nodeChildren = await waitFor(() => screen.getByText(children))
    expect(nodeChildren).toBeTruthy()
  })
})
