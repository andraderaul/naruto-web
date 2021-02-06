import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Sharingan = styled.div`
  background: #363636;
  height: 128px;
  width: 128px;
  position: relative;
  border: 5px solid #000;
  animation: spin 2s ease infinite;
  border-radius: 50%;

  div {
    border-radius: 50%;
    div {
      position: absolute;
      width: 16px;
      height: 16px;
      background: #000;
    }

    div:nth-child(1) {
      top: -8px;
      left: 50%;
      transform: translateX(-50%);
    }

    div:nth-child(2) {
      bottom: 8px;
      left: -5px;
      transform: rotate(-120deg);
    }

    div:nth-child(3) {
      bottom: 8px;
      right: -5px;
      transform: rotate(120deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      background: #363636;
    }
    50% {
      background: #6b6b6b;
      box-shadow: 0 0 4px 4px #6b6b6b;
    }
    100% {
      transform: rotate(360deg);
      box-shadow: none;
      background: #363636;
    }
  }
`;

export const InnerRing = styled.div`
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  border: 4px rgba(88, 85, 85, 0.5) solid;
`;

export const Tomoe = styled.div`
  &:before {
    content: '';
    position: absolute;
    box-sizing: border-box;
    top: -8px;
    width: 30px;
    height: 14px;
    border-left: 16px solid #000;
    border-radius: 100% 0 0 0;
  }
`;

export const Circle = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.6);
`;
