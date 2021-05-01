import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import Card from './Card'

export default {
  component: Card,
  title: 'Components/Card',
  decorators: [withKnobs]
}

export const Default = () => {
  const id = text('id', 'f72d97da-733b-4f9a-aae1-e6a142e7bef6')
  const name = text('name', 'Naruto')
  const src = text(
    'src',
    'https://i.ytimg.com/vi/FQwk3Y_h3xA/maxresdefault.jpg'
  )

  return (
    <>
      <Card
        id={id}
        name={name}
        onClick={(l) => {
          action(`"I am a Card and I was clicked! ${l}`)
          return l
        }}
        src={src}
      />
    </>
  )
}
