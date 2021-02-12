import * as S from "./Grid.styles";

const Grid: React.FC = ({ children }) => {
  return <S.Grid data-testid="grid">{children}</S.Grid>;
};

export default Grid;
