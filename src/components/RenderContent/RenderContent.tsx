import LoadingSharingan from '../LoadingSharingan'
import ContentList, { DataContent } from '../ContentList/ContentList'
import { RequestStatus } from '../../hooks/useAsync'

export type PropsRenderContent = {
  status?: string
  data: DataContent[]
  error: string
  noContentMessage: string
  onClick: (id: string) => string
}

const RenderContent = ({
  status,
  data,
  error,
  noContentMessage,
  onClick
}: PropsRenderContent) => {
  const content = {
    [RequestStatus.PENDING as string]: <LoadingSharingan />,
    [RequestStatus.RESOLVED as string]: (
      <ContentList data={data} noContent={noContentMessage} onClick={onClick} />
    ),
    [RequestStatus.REJECTED as string]: <div>{error}</div>,
    default: <div>Unhandled status: {status}</div>
  }

  return content[status ?? 'default']
}

export default RenderContent
