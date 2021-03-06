import { useRouter } from 'next/router'
import { alphabet } from '../../constants'
import * as S from './Alphabet.styles'

export type PropsAlphabet = {
  letter: string
  pathname: string
  setLetter: (letter: string) => void
}

const Alphabet = ({ letter, setLetter, pathname }: PropsAlphabet) => {
  const router = useRouter()

  const handleOnClick = (alpha: string) => () => {
    setLetter(alpha)
    router?.push({
      pathname,
      query: {
        from: alpha
      }
    })
  }

  return (
    <S.Alphabet data-testid="alphabet">
      {alphabet.map((alpha) => (
        <S.Span
          active={letter === alpha}
          key={alpha}
          onClick={handleOnClick(alpha)}
        >
          {alpha}
        </S.Span>
      ))}
    </S.Alphabet>
  )
}

export default Alphabet
