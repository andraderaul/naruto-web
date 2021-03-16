import { render } from '@testing-library/react'
import PageTitle from '.'

describe('<PageTitle />', () => {
  it('should render PageTitle with a default title', () => {
    render(<PageTitle />)
  })

  it('should render PageTitle with a custom title', () => {
    const title = 'Page Title Test'
    render(<PageTitle title={title} />)
  })
})
