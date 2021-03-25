import * as S from './SlideItem.styles'

export type PropsSlideItem = {
  color: string
  url: string
  name: string
}

const SlideItem = ({ color, url, name }: PropsSlideItem) => (
  <>
    <S.Wrapper color={color} className="swiper-slide">
      <S.BackgroundImage url={url} />
      <S.Span>{name}</S.Span>
    </S.Wrapper>
  </>
)

export default SlideItem
