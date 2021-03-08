import * as S from './Layout.styles';

interface IPropsLayout {
  children: React.ReactNode;
}
const Layout: React.FC<IPropsLayout> = ({ children }: IPropsLayout) => (
  <S.Layout data-testid="layout">{children}</S.Layout>
);

export default Layout;
