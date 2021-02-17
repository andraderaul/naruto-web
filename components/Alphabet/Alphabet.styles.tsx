import styled from 'styled-components';

export const Alphabet = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

interface ISpanStyledProps {
  active?: boolean;
}

export const Span = styled.span<ISpanStyledProps>`
  padding: 0.1rem 1rem;
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.medium};

  &:hover {
    transform: scale(1.7, 1.7);
    cursor: pointer;
  }
`;
