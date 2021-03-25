import * as S from './Grid.styles'

export type PropsGrid = {
  children: React.ReactNode
}

const Grid = ({ children }: PropsGrid) => (
  <S.Grid data-testid="grid">{children}</S.Grid>
)

export default Grid
