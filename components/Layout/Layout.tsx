import * as S from "./Layout.styles";

const Layout: React.FC = ({ children }) => {
  return <S.Layout data-testid="layout">{children}</S.Layout>;
};

export default Layout;
