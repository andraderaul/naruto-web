import React from 'react';

import * as S from './EmptyState.styles';

interface IEmptyState {
  description: string;
}
const EmptyState: React.FC<IEmptyState> = ({ description }: IEmptyState) => (
  <S.Wrapper>
    <span>{description}</span>
  </S.Wrapper>
);

export default EmptyState;
