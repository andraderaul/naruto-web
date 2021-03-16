import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme as render } from '../../util/mock/theme.mock'
import EmptyState from '.'

describe('<EmptyState />', () => {
  it('should render EmptyState', async () => {
    const description = 'not found data'
    render(<EmptyState description={description} />)
    const nodeEmptyState = await waitFor(() => screen.getByText(description))
    expect(nodeEmptyState).toBeTruthy()
  })
})
