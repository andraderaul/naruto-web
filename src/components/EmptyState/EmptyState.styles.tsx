import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`

export const Image = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`
