import styled from 'styled-components';

export const WrapperSlider = styled.div`
  position: relative;
  .swiper-container {
    width: 100%;
    height: 20rem;
  }
`;
export const Title = styled.h2`
  padding: 1.5rem 0rem;
  color: ${({ theme }) => theme.colors.orangeLight};
`;
