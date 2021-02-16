import React, { useCallback } from 'react';
import Swiper from 'react-id-swiper';
import SlideItem from '../SlideItem';

import * as S from './Slider.styles';

interface IPropsItem {
  color: string;
  url: string;
  name: string;
}

interface IPropsSlider {
  title: string;
  items: IPropsItem[];
}

const Slider: React.FC<IPropsSlider> = ({ title, items }: IPropsSlider) => {
  const params = {
    spaceBetween: 30,
    loop: true,
    autoplay: true,
  };

  const renderItem = useCallback(
    (item) => <SlideItem key={item.color} {...item} />,
    [],
  );

  return (
    <>
      <S.Title>{title}</S.Title>
      <S.WrapperSlider>
        <Swiper {...params}>{items.map(renderItem)}</Swiper>
      </S.WrapperSlider>
    </>
  );
};

export default Slider;
