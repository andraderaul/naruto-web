import { useRouter } from 'next/router'
import * as S from './Banner.styles'
import { ROUTES } from '../../constants/urls'

const Banner = () => {
  const router = useRouter()
  if (router.route !== ROUTES.home) return <S.NoBanner />

  return (
    <S.Banner data-testid="banner">
      <img
        src="https://w.wallhaven.cc/full/ey/wallhaven-ey3edo.png "
        alt="banner"
      />
    </S.Banner>
  )
}

export default Banner
