import Alphabet from './Alphabet'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  component: Alphabet,
  title: 'Components/Alphabet',
  decorators: [withKnobs]
}

export const Default = () => {
  const letter = text('letter', 'A')
  const pathname = text('pathname', '/')
  return (
    <>
      <Alphabet
        letter={letter}
        pathname={pathname}
        setLetter={(letter) => {
          action(`"I am an Alphabet and I was clicked! ${letter}`)
        }}
      />
    </>
  )
}
