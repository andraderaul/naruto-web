import React, { useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './Header.styles';
import { ROUTES } from '../../constants/urls';

const Header: React.FC = () => {
  const router = useRouter();

  const isActive = useCallback((path) => router.pathname === path, [router]);

  const handleOnClick = (route: string) => () => {
    router.push(route);
  };

  return (
    <S.Header data-testid="header">
      <S.Nav>
        <div>
          <S.Link
            active={isActive(ROUTES.home)}
            onClick={handleOnClick(ROUTES.home)}
          >
            <Link href={ROUTES.home}>Naruto Web</Link>
          </S.Link>
        </div>
        <S.Links>
          <S.Link
            active={isActive(ROUTES.characters)}
            onClick={handleOnClick(ROUTES.characters)}
          >
            <Link href={ROUTES.characters}>Characters</Link>
          </S.Link>
          <S.Link
            active={isActive(ROUTES.jutsus)}
            onClick={handleOnClick(ROUTES.jutsus)}
          >
            <Link href={ROUTES.jutsus}>Jutsus</Link>
          </S.Link>
          <S.Link
            active={isActive(ROUTES.teams)}
            onClick={handleOnClick(ROUTES.teams)}
          >
            <Link href={ROUTES.teams}>Teams</Link>
          </S.Link>
        </S.Links>
        <div>
          <S.Link>
            <span>Username</span>
          </S.Link>
        </div>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
