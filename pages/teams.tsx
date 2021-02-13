import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getTeams, getTeamsByParams } from '../lib/teams';
import ITeam from '../interfaces/team';
import { LINKS } from '../constants/urls';
import { TEAMS } from '../constants/endpoints';
import Search from '../components/Search';
import Alphabet from '../components/Alphabet';
import useAsync, { RequestStatus } from '../hooks/useAsync';
import ContentList, {
  IDataContent,
} from '../components/ContentList/ContentList';
import LoadingSharingan from '../components/LoadingSharingan';

interface IPropsTeam {
  data: ITeam[];
}

interface IStaticProps {
  props: {
    data: ITeam[];
  };
}
export async function getStaticProps(): Promise<IStaticProps> {
  const data = await getTeams();
  return {
    props: {
      data,
    },
  };
}

const Teams: React.FC<IPropsTeam> = ({ data }: IPropsTeam) => {
  const { status, error, data: dataAsync, runPromise } = useAsync({
    status: RequestStatus.RESOLVED,
    data,
  });

  const [letter, setLetter] = useState('');
  const router = useRouter();

  useEffect(() => {
    const { query } = router;
    if (query.from) {
      const from = query.from as string;
      setLetter(from);
      return runPromise(getTeamsByParams('from', from));
    }
    if (query.name) {
      const name = query.name as string;
      setLetter('');
      return runPromise(getTeamsByParams('name', name));
    }

    return () => {};
  }, [router, runPromise]);

  const RenderContent: React.FC = () => {
    const content = {
      [RequestStatus.PENDING as string]: <LoadingSharingan />,
      [RequestStatus.RESOLVED as string]: (
        <ContentList
          data={dataAsync as IDataContent[]}
          noContent="Team not found"
          onClick={LINKS.team}
        />
      ),
      [RequestStatus.REJECTED as string]: <div>{error?.message}</div>,
      default: <div>Unhandled status: {status}</div>,
    };

    return content[status ?? 'default'];
  };

  return (
    <>
      <Search pathname={TEAMS} />
      <Alphabet pathname={TEAMS} letter={letter} setLetter={setLetter} />
      <RenderContent />
    </>
  );
};

export default Teams;
