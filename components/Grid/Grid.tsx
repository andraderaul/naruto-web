import * as S from './Grid.styles';

interface IPropsGrid {
  children: React.ReactNode;
}

const Grid: React.FC<IPropsGrid> = ({ children }: IPropsGrid) => (
  <S.Grid data-testid="grid">{children}</S.Grid>
);

export default Grid;
