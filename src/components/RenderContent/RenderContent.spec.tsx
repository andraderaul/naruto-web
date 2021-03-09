import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme as render } from '../../util/mock/theme.mock'
import { RequestStatus } from '../../hooks/useAsync'

import RenderContent from '.'
import { IDataContent } from '../ContentList/ContentList'

describe('<RenderContent />', () => {
  it('should render RenderContent PENDING', async () => {
    render(
      <RenderContent
        status={RequestStatus.PENDING}
        data={[]}
        error=""
        noContentMessage=""
        onClick={() => null}
      />
    )

    const nodeRender = await waitFor(() =>
      screen.getByTestId('loading-sharingan')
    )
    expect(nodeRender).toBeTruthy()
  })

  it('should render RenderContent RESOLVED', async () => {
    const data = [
      {
        id: 'guid',
        picture: 'http://',
        name: 'test'
      }
    ] as IDataContent[]

    render(
      <RenderContent
        status={RequestStatus.RESOLVED}
        data={data}
        error=""
        noContentMessage=""
        onClick={() => null}
      />
    )

    const nodeRender = await waitFor(() => screen.getByTestId('grid'))
    expect(nodeRender).toBeTruthy()
  })

  it('should render RenderContent REJECTED', async () => {
    const error = 'this is an error'
    render(
      <RenderContent
        status={RequestStatus.REJECTED}
        data={[]}
        error={error}
        noContentMessage=""
        onClick={() => null}
      />
    )

    const nodeRender = await waitFor(() => screen.getByText(error))
    expect(nodeRender).toBeTruthy()
  })

  it('should render RenderContent DEFAULT', async () => {
    const status = undefined
    render(
      <RenderContent
        status={status}
        data={[]}
        error=""
        noContentMessage=""
        onClick={() => null}
      />
    )

    const nodeRender = await waitFor(() =>
      screen.getByText('Unhandled status:')
    )
    expect(nodeRender).toBeTruthy()
  })
})
