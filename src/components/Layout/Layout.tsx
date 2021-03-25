import * as S from './Layout.styles'

export type PropsLayout = {
  children: React.ReactNode
}
const Layout = ({ children }: PropsLayout) => (
  <S.Layout data-testid="layout">{children}</S.Layout>
)

export default Layout
