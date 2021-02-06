import { useState } from 'react';
import { useRouter } from 'next/router';
import * as S from './Search.styles';

interface IPropsSearch {
  pathname: string;
}

const Search: React.FC<IPropsSearch> = ({ pathname }: IPropsSearch) => {
  const router = useRouter();
  const [text, setText] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const ENTER = 'Enter';
    if (event.key === ENTER && text.length > 0) {
      router.push({
        pathname,
        query: {
          name: text,
        },
      });
    }
  };

  const Icon = () => (
    <S.WrapperIcon>
      <svg
        width="100%"
        height="100%"
        version="1.1"
        viewBox="0 0 20 20"
        x="0px"
        y="0px"
      >
        <g>
          <path
            fillRule="evenodd"
            d="M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z"
            clipRule="evenodd"
          ></path>
        </g>
      </svg>
    </S.WrapperIcon>
  );

  return (
    <S.Wrapper>
      <S.Span>Filter by</S.Span>
      <Icon />
      <S.Input
        placeholder="Search"
        value={text}
        onChange={onChange}
        onKeyDown={handleOnKeyDown}
      />
    </S.Wrapper>
  );
};

export default Search;
