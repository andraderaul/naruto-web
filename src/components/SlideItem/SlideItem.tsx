import * as S from './SlideItem.styles'

interface ISlideItem {
  color: string
  url: string
  name: string
}

const SlideItem = ({ color, url, name }: ISlideItem) => (
  <>
    <S.Wrapper color={color} className="swiper-slide">
      <S.BackgroundImage url={url} />
      <S.Span>{name}</S.Span>
    </S.Wrapper>
  </>
)

export default SlideItem
