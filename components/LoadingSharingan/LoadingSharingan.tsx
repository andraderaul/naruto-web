import * as S from "./LoadingSharingan.styles";

const LoadingSharingan = () => {
  return (
    <S.Wrapper data-testid="loading-sharingan">
      <S.Sharingan>
        <S.InnerRing>
          <S.Tomoe />
          <S.Tomoe />
          <S.Tomoe />
          <S.Circle />
        </S.InnerRing>
      </S.Sharingan>
    </S.Wrapper>
  );
};

export default LoadingSharingan;
