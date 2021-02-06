import styled from 'styled-components';
import media from 'styled-media-query';

export const Card = styled.div`
  max-width: 75%;
  height: 500px;
  padding: 1.5rem;
  margin: 2rem auto;
  display: flex;
  background-color: #f2d0a9;
  background: linear-gradient(45deg, #f2d0a9, #f1e3d3);

  //TODO: MOBILE
  ${media.lessThan('medium')`
    max-width: 90%;
  `}
`;

export const Infos = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Info = styled.div`
  display: flex;

  span {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  div:nth-child(1) {
    width: 8rem;
    span:nth-child(1) {
      font-weight: bold;
    }
  }

  div:nth-child(2) {
    animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    @keyframes slide-right {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(100px);
      }
    }
  }
`;

export const Image = styled.figure`
  width: 30%;
  margin-right: 2rem;
  position: relative;
  border-radius: 1rem;

  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
