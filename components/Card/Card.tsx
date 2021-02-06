import * as S from './Card.styles';
import { useRouter } from 'next/router';

interface ICard {
  src: string;
  name: string;
  id: string;
  onClick: Function;
}

const Card: React.FC<ICard> = ({ id, src, name, onClick }) => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push(onClick(id));
  };

  return (
    <S.Card onClick={handleOnClick}>
      <img
        src={
          src ??
          'https://milcouros.com.br/wp-content/themes/white/assets/images/placeholder.jpg'
        }
        alt={name}
        loading="lazy"
      />
      <span>{name}</span>
    </S.Card>
  );
};

export default Card;
