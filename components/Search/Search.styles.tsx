import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem;

  ${media.lessThan('medium')`
    padding: 1rem;
    display:flex;
    flex-direction: column;
  `}
`;

export const Input = styled.input`
  width: 16rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondaryLight};
  line-height: 1.5;
  font-size: ${({ theme }) => theme.fontSize.small};
  transition: box-shadow 0.1s ease-in, border 0.1s ease-in,
    background-color 0.1s ease-in;
  border: ${({ theme }) => theme.width.border} solid
    ${({ theme }) => theme.colors.opac4};
  padding: 1rem;
  padding-left: 2.5rem;

  &:hover {
    border: ${({ theme }) => theme.width.border} solid
      ${({ theme }) => theme.colors.opac6};
  }

  &:focus {
    border: ${({ theme }) => theme.width.border} solid
      ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.black};
  }

  ${media.lessThan('medium')`
    width: 100%; 
  `}
  ${({ theme }) => theme.effect.grow}
`;

export const WrapperIcon = styled.div`
  position: absolute;
  top: 2.2rem;
  left: 8.6rem;
  height: 2rem;
  width: 2rem;

  svg {
    fill: #adadb8;
  }

  ${media.lessThan('medium')`
    top:4.5rem;
    left:1.2rem;
  `}
`;

export const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSize.medium};
  padding: 1rem;
  color: ${({ theme }) => theme.colors.primaryLight};
`;
