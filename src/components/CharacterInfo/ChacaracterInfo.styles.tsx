import styled from 'styled-components'
import media from 'styled-media-query'

export const Card = styled.div`
  max-width: 75%;
  height: 500px;
  padding: 1.5rem;
  margin: 2rem auto;
  display: flex;
  background-color: ${({ theme }) => theme.colors.gradientStart};
  background: ${({ theme }) =>
    `linear-gradient(45deg, ${theme.colors.gradientStart}, ${theme.colors.gradientEnd})`};

  ${media.lessThan('medium')`
    height: auto;
    flex-direction: column;
    width: 90%;
  `}
`

export const Infos = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${media.lessThan('medium')`
    flex-direction: column;
    margin: 0 auto;
  `}
`

export const Info = styled.div`
  display: flex;

  span {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  div:nth-child(1) {
    width: 8rem;
    span:nth-child(1) {
      font-weight: bold;
    }
  }

  ${media.greaterThan('small')`
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
  `}

  ${media.lessThan('small')`
    flex-direction: column;
  `}
`

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

  //TODO: MOBILE
  ${media.lessThan('medium')`
    margin: 1rem auto;
    max-width: 100%;
    min-height: 9.5rem;
  `}
`
