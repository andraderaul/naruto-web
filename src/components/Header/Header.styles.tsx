import styled from 'styled-components'
import media from 'styled-media-query'

interface ILinkStyledProps {
  active?: boolean
}

export const Header = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  top: 0;
  z-index: 2;

  ${media.lessThan('medium')`
    position: relative;
  `}
`

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${media.lessThan('small')`
    flex-direction: column-reverse;

    div {
      display: flex;
      width: 100%;
      justify-content:center;
    }
  `}

  ${({ theme }) => theme.effect.fadeIn}
`

export const Link = styled.div<ILinkStyledProps>`
  padding: 1.5rem;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.secondary};
  cursor: pointer;
  a {
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSize.large};
    color: ${({ theme }) => theme.colors.primaryLight};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.opac6};
    text-decoration: underline;
    ${({ theme }) => theme.effect.fadeIn}
  }

  ${media.lessThan('medium')`
    padding: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
  `}
`

export const Links = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;

  ${media.lessThan('medium')`
    width: 100%;
    flex-direction: column;
    align-items: center;
  `}
`
