import React from 'react';

import * as S from './SlideItem.styles';

interface ISlideItem {
  color: string;
  url: string;
  name: string;
}

const SlideItem: React.FC<ISlideItem> = ({ color, url, name }: ISlideItem) => (
  <>
    <S.Wrapper color={color} className="swiper-slide">
      <S.BackgroundImage url={url} />
      <S.Span>{name}</S.Span>
    </S.Wrapper>
  </>
);

export default SlideItem;
