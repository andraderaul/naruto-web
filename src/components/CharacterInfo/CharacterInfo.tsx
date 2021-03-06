import { useMemo } from 'react'
import ICharacter from '../../interfaces/character'

import * as S from './ChacaracterInfo.styles'

export type PropsInfo = {
  label: string
  value: string | number[] | string[]
}

const Info = ({ label, value }: PropsInfo) => {
  const valueFormatted = useMemo(
    () => (typeof value === 'string' ? value : value?.join(' - ')),
    [value]
  )

  return (
    <S.Info>
      <div>
        <span>{label}:</span>
      </div>
      <div>
        <span>{valueFormatted || '-'}</span>
      </div>
    </S.Info>
  )
}

const CharacterInfo = ({
  picture,
  name,
  kanji_name: kanjiName,
  birthday,
  gender,
  age,
  height,
  weight
}: ICharacter) => (
  <S.Card data-testid="character-info">
    <S.Image>
      <img src={picture} alt={name} />
    </S.Image>
    <S.Infos>
      <Info label="Name" value={name} />
      <Info label="Kanji Name" value={kanjiName} />
      <Info label="Birthdate" value={birthday} />
      <Info label="Gender" value={gender} />
      <Info label="Age" value={age} />
      <Info label="Height" value={height} />
      <Info label="Weight" value={weight} />
    </S.Infos>
  </S.Card>
)

export default CharacterInfo
