import { useState } from 'react';
import { getJutsus } from '../lib/jutsus';
import IJutsu from '../interfaces/jutsu';
import { LINKS } from '../constants/urls';
import { JUTSUS } from '../constants/endpoints';
import Grid from '../components/Grid';
import Card from '../components/Card';
import Search from '../components/Search';
import Alphabet from '../components/Alphabet';

interface IPropsJutsu {
  data: IJutsu[];
}

export async function getStaticProps() {
  const data = await getJutsus();
  return {
    props: {
      data,
    },
  };
}

const Jutsus: React.FC<IPropsJutsu> = ({ data }: IPropsJutsu) => {
  const [letter, setLetter] = useState('');
  return (
    <>
      <Search pathname={JUTSUS} />
      <Alphabet pathname={JUTSUS} letter={letter} setLetter={setLetter} />
      <Grid>
        {data.map((item) => (
          <Card
            key={item.id}
            src={item.picture}
            name={item.name}
            id={item.id}
            onClick={LINKS.jutsu}
          />
        ))}
      </Grid>
    </>
  );
};

export default Jutsus;
