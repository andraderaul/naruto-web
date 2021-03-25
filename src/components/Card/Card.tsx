import { useRouter } from 'next/router'
import * as S from './Card.styles'

export type PropsCard = {
  src?: string
  name: string
  id: string
  onClick: (id: string) => string
}

const Card = ({ id, src, name, onClick }: PropsCard) => {
  const router = useRouter()
  const handleOnClick = (): void => {
    router.push(onClick(id))
  }

  return (
    <S.Card data-testid="card" onClick={handleOnClick}>
      <img
        src={
          src ??
          'https://milcouros.com.br/wp-content/themes/white/assets/images/placeholder.jpg'
        }
        alt={name}
        loading="lazy"
      />
      <span>{name}</span>
    </S.Card>
  )
}

Card.defaultProps = {
  src: ''
}

export default Card
