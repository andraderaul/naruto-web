import LoadingSharingan from '../LoadingSharingan'
import ContentList, { IDataContent } from '../ContentList/ContentList'
import { RequestStatus } from '../../hooks/useAsync'

interface IPropsRenderContent {
  status?: string
  data: IDataContent[]
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
}: IPropsRenderContent) => {
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
