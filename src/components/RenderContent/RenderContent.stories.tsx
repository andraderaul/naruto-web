import { withKnobs, select, text } from '@storybook/addon-knobs'
import RenderContent from './RenderContent'
import charactersMock from '../../util/mock/data/characters'
import ICharacter from 'interfaces/character'
export default {
  component: RenderContent,
  title: 'Components/RenderContent',
  decorators: [withKnobs]
}

export const Default = () => {
  const status = select(
    'status',
    {
      PENDING: 'pending',
      RESOLVED: 'resolved',
      REJECTED: 'rejected',
      DEFAULT: 'default'
    },
    'pending'
  )

  const error = text('error', 'error message')
  const noContentMessage = text('noContentMessage', 'no content message')

  return (
    <>
      <RenderContent
        status={status}
        error={error}
        noContentMessage={noContentMessage}
        data={charactersMock as ICharacter[]}
        onClick={(s) => s}
      />
    </>
  )
}
