import { withKnobs, text, array } from '@storybook/addon-knobs'
import CharacterInfo from './CharacterInfo'

export default {
  component: CharacterInfo,
  title: 'Components/CharacterInfo',
  decorators: [withKnobs]
}

export const Default = () => {
  const id = text('id', '3123213f72d97da-733b-4f9a-aae1-e6a142e7bef6')
  const picture = text(
    'picture',
    'https://static.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png'
  )
  const name = text('name', 'Naruto Uzumaki')
  const kanji_name = text('kanji_name', 'うずまきナルト')
  const birthday = text('birthday', 'October 10')
  const gender = text('gender', 'Male')
  const age = array('age', ['12', '13', '15', '17'])
  const height = array('height', ['145.3', '147.5', '166.0', '180.0'])
  const weight = array('weight', ['40.1', '40.6', '50.9'])
  return (
    <>
      <CharacterInfo
        id={id}
        picture={picture}
        name={name}
        kanji_name={kanji_name}
        birthday={birthday}
        gender={gender}
        age={age}
        height={height}
        weight={weight}
      />
    </>
  )
}
