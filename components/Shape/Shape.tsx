import * as S from './Shape.styles';

interface IPropsShape {
  children: React.ReactNode;
}

const Shape: React.FC<IPropsShape> = ({ children }: IPropsShape) => (
  <>
    <S.Shape data-testid="shape">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" />
      </svg>
    </S.Shape>
    {children}
  </>
);

export default Shape;
