import React, { useRef, useState, useCallback, useEffect } from 'react';
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

// TODO:  pagination
const Slider: React.FC<IPropsSlider> = ({ title, items }: IPropsSlider) => {
  const swiperRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const params = {
    initialSlide: 0,
    // grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    loop: true,
    autoplay: true,
  };

  const goNext = () => {
    if (swiperRef?.current && swiperRef?.current?.swiper) {
      swiperRef?.current?.swiper?.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef?.current && swiperRef?.current?.swiper) {
      swiperRef?.current?.swiper?.slidePrev();
    }
  };
  const renderItem = useCallback(({ idx, color, content }) => {
    <div key={`slide-${idx}`}>laga:{color}</div>;
  }, []);

  const updateIndex = useCallback(
    () => setCurrentIndex(swiperRef?.current?.swiper?.realIndex),
    [],
  );

  useEffect(() => {
    const swiperInstance = swiperRef?.current?.swiper;

    if (swiperInstance) {
      swiperInstance.on('slideChange', updateIndex);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off('slideChange', updateIndex);
      }
    };
  }, [updateIndex]);
  return (
    <>
      <S.Title>{title}</S.Title>
      <S.WrapperSlider>
        <Swiper {...params} ref={swiperRef}>
          {items.map((item) => (
            <SlideItem key={item.color} {...item} />
          ))}
        </Swiper>
      </S.WrapperSlider>
    </>
  );
};

export default Slider;
