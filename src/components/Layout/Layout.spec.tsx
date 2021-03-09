import { screen, waitFor, render } from '@testing-library/react'
import Layout from '.'

describe('<Layout />', () => {
  it('should render Layout', async () => {
    const children = 'test children'
    render(<Layout>{children}</Layout>)

    const nodeLayout = await waitFor(() => screen.getByTestId('layout'))
    expect(nodeLayout).toBeTruthy()

    const nodeChildren = await waitFor(() => screen.getByText(children))
    expect(nodeChildren).toBeTruthy()
  })
})
