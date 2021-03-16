import * as S from './EmptyState.styles'

export type IEmptyState = {
  description: string
}
const EmptyState = ({ description }: IEmptyState) => (
  <S.Wrapper>
    <span>{description}</span>
  </S.Wrapper>
)

export default EmptyState
