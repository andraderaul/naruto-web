import styled from 'styled-components'

export const Shape = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(0deg);

  svg {
    z-index: -1;
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 500px;
    transform: rotateY(180deg);
    path {
      fill: #28343e;
    }
  }
`
