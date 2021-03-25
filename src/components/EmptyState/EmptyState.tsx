import * as S from './EmptyState.styles'

export type EmptyState = {
  description: string
}
const EmptyState = ({ description }: EmptyState) => (
  <S.Wrapper>
    <span>{description}</span>
  </S.Wrapper>
)

export default EmptyState
