import styled from 'styled-components'
import media from 'styled-media-query'

interface IBackgroundStyledProps {
  url: string
}

interface IWrapperStyledProps {
  color: string
}

export const Wrapper = styled.div<IWrapperStyledProps>`
  max-height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${({ color }) => color};
`

export const BackgroundImage = styled.div<IBackgroundStyledProps>`
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat, repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;

  ${media.lessThan('medium')`
     background-position: center;
     background-size: cover;
  `}
`

export const Span = styled.span`
  position: absolute;
  z-index: 1;
  font-size: ${({ theme }) => theme.fontSize.extraLarge};

  animation: translate-in 0.6s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  @keyframes translate-in {
    0% {
      transform: translateX(0) translateY(0);
    }
    100% {
      transform: translateX(15rem) translateY(-10px);
    }
  }

  ${media.lessThan('medium')`
     display:none;
  `}
`
