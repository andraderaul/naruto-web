import styled from 'styled-components';
import media from 'styled-media-query';

export const Banner = styled.div`
  margin-top: 4.1rem;
  width: 100%;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  //TODO: MOBILE
  ${media.lessThan('medium')`
    height:200px;
    margin-top: 0;
  `}
`;

export const NoBanner = styled.div`
  margin-top: 4.1rem;
  ${media.lessThan('medium')`
    margin-top: 0;
  `}
`;
