import { useState, useEffect } from 'react';
import useAsync, { RequestStatus } from '../hooks/useAsync';
import { useRouter } from 'next/router';
import { getCharactersByParams, getCharacters } from '../lib/characters';
import ICharacter from '../interfaces/character';
import { CHARACTERS } from '../constants/endpoints';
import { LINKS } from '../constants/urls';
import Grid from '../components/Grid';
import Card from '../components/Card';
import Search from '../components/Search';
import Alphabet from '../components/Alphabet';
import LoadingSharingan from '../components/LoadingSharingan';

interface IPropsCharacter {
  data: ICharacter[];
}

export async function getStaticProps() {
  const data = await getCharacters();
  return {
    props: {
      data,
    },
  };
}

const Characters: React.FC<IPropsCharacter> = ({ data }: IPropsCharacter) => {
  const { status, error, data: dataAsync, runPromise } = useAsync({
    status: RequestStatus.RESOLVED,
    data: data,
  });

  const [letter, setLetter] = useState('');
  const router = useRouter();

  useEffect(() => {
    const { query } = router;
    if (query.from) {
      const { from } = query;
      setLetter(from as string);
      return runPromise(getCharactersByParams('from', from as string));
    } else if (query.name) {
      const { name } = query;
      setLetter('');
      return runPromise(getCharactersByParams('name', name as string));
    }
  }, [router]);

  const RenderContent = () => {
    switch (status) {
      case RequestStatus.PENDING:
        return <LoadingSharingan />;
      case RequestStatus.RESOLVED:
        return (
          <Grid>
            {dataAsync?.length === 0 ? (
              <div>Characters not found</div>
            ) : (
              dataAsync?.map((item) => (
                <Card
                  key={item.id}
                  src={item.picture}
                  name={item.name}
                  id={item.id}
                  onClick={LINKS.character}
                />
              ))
            )}
          </Grid>
        );
      case RequestStatus.REJECTED:
        return <div>{error?.message}</div>;
      default:
        return <div>Unhandled status: {status}</div>;
    }
  };

  return (
    <>
      <Search pathname={CHARACTERS} />
      <Alphabet letter={letter} setLetter={setLetter} pathname={CHARACTERS} />
      <RenderContent />
    </>
  );
};

export default Characters;
