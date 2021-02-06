import { useState } from 'react';
import { getTeams } from '../lib/teams';
import ITeam from '../interfaces/team';
import { LINKS } from '../constants/urls';
import { TEAMS } from '../constants/endpoints';
import Grid from '../components/Grid';
import Card from '../components/Card';
import Search from '../components/Search';
import Alphabet from '../components/Alphabet';

interface IPropsTeam {
  data: ITeam[];
}

export async function getStaticProps() {
  const data = await getTeams();
  return {
    props: {
      data,
    },
  };
}

const Teams: React.FC<IPropsTeam> = ({ data }: IPropsTeam) => {
  const [letter, setLetter] = useState('');
  return (
    <>
      <Search pathname={TEAMS} />
      <Alphabet pathname={TEAMS} letter={letter} setLetter={setLetter} />
      <Grid>
        {data.map((item) => (
          <Card
            key={item.id}
            src={item.picture}
            name={item.name}
            id={item.id}
            onClick={LINKS.team}
          />
        ))}
      </Grid>
    </>
  );
};

export default Teams;
