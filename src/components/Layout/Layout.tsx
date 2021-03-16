import * as S from './Layout.styles'

export type IPropsLayout = {
  children: React.ReactNode
}
const Layout = ({ children }: IPropsLayout) => (
  <S.Layout data-testid="layout">{children}</S.Layout>
)

export default Layout
