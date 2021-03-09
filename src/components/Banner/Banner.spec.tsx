import { screen, waitFor } from '@testing-library/react'
import { render } from '../../util/mock/router.mock'
import Banner from '.'

describe('<Banner />', () => {
  it('should render Banner', async () => {
    render(<Banner />)
    const nodeBanner = await waitFor(() => screen.getByTestId('banner'))
    expect(nodeBanner).toBeTruthy()
  })
})
