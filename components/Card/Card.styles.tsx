import styled from 'styled-components';

export const Card = styled.div`
  width: 200px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    animation: shadow-pop-br 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;

    @keyframes shadow-pop-br {
      0% {
        box-shadow: 0 0 #f6894d, 0 0 #f6894d, 0 0 #f6894d, 0 0 #f6894d,
          0 0 #f6894d, 0 0 #f6894d, 0 0 #f6894d, 0 0 #f6894d;
        transform: translateX(0) translateY(0);
      }
      100% {
        box-shadow: 1px 1px #f8a77a, 2px 2px #f8a77a, 3px 3px #f8a77a,
          4px 4px #f8a77a, 5px 5px #f8a77a, 6px 6px #f8a77a, 7px 7px #f8a77a,
          8px 8px #f8a77a;
        transform: translateX(-8px) translateY(-8px);
      }
    }
  }

  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  span {
    padding-top: 0.5rem;
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;
