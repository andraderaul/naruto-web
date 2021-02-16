import styled from 'styled-components';
import media from 'styled-media-query';

interface ILinkStyledProps {
  active?: boolean;
}

export const Header = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
  position: fixed;
  top: 0;
  z-index: 1;

  ${media.lessThan('medium')`
    position: relative;
  `}
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${({ theme }) => theme.effect.fadeIn}

  ${media.lessThan('medium')`
    flex-direction: column;
    align-items: center;
    div {
      width: 100%;
    }
  `}
`;

export const Link = styled.div<ILinkStyledProps>`
  padding: 1.5rem;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.orange : theme.colors.gray};
  cursor: pointer;
  a {
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSize.large};
    color: ${({ theme }) => theme.colors.orangeLight};
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
`;

export const Links = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;

  ${media.lessThan('medium')`
    width: 100%;
    flex-direction: column;
    align-items: center;
  `}
`;
