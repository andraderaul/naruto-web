import ICharacter from '../../interfaces/character';
import { ROUTES } from '../../constants/urls';
import { getCharacterById, getCharacters } from '../../lib/characters';
import { GetStaticPropsContext } from 'next';
import CharacterInfo from '../../components/CharacterInfo';

interface IPropsCharacter {
  data: ICharacter;
}

export async function getStaticPaths() {
  const data = await getCharacters();
  const paths = data.map((character) => `${ROUTES.characters}/${character.id}`);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const id = params?.id as string;
  const data = await getCharacterById(id);

  return {
    props: {
      data,
    },
  };
}

const Character: React.FC<IPropsCharacter> = ({ data }: IPropsCharacter) => {
  return <CharacterInfo {...data} />;
};

export default Character;
