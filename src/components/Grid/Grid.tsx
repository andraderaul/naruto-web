import * as S from './Grid.styles'

export type IPropsGrid = {
  children: React.ReactNode
}

const Grid = ({ children }: IPropsGrid) => (
  <S.Grid data-testid="grid">{children}</S.Grid>
)

export default Grid
