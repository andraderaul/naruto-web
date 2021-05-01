import { withKnobs, text } from '@storybook/addon-knobs'
import ContentList from './ContentList'
import charactersMock from '../../util/mock/data/characters'
import ICharacter from 'interfaces/character'

export default {
  component: ContentList,
  title: 'Components/ContentList',
  decorators: [withKnobs]
}

export const Default = () => {
  const noContent = text('noContent', 'notFound')
  return (
    <>
      <ContentList
        data={charactersMock as ICharacter[]}
        onClick={(s) => s}
        noContent={noContent}
      />
    </>
  )
}
