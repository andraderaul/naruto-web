import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getJutsus, getJutsusByParams } from '../lib/jutsus';
import IJutsu from '../interfaces/jutsu';
import { LINKS } from '../constants/urls';
import { JUTSUS } from '../constants/endpoints';
import Search from '../components/Search';
import Alphabet from '../components/Alphabet';
import useAsync, { RequestStatus } from '../hooks/useAsync';
import LoadingSharingan from '../components/LoadingSharingan';
import ContentList, {
  IDataContent,
} from '../components/ContentList/ContentList';

interface IPropsJutsu {
  data: IJutsu[];
}

interface IStaticProps {
  props: {
    data: IJutsu[];
  };
}

export async function getStaticProps(): Promise<IStaticProps> {
  const data = await getJutsus();
  return {
    props: {
      data,
    },
  };
}

const Jutsus: React.FC<IPropsJutsu> = ({ data }: IPropsJutsu) => {
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
      return runPromise(getJutsusByParams('from', from));
    }
    if (query.name) {
      const name = query.name as string;
      setLetter('');
      return runPromise(getJutsusByParams('name', name));
    }

    return () => {};
  }, [router, runPromise]);

  const RenderContent: React.FC = () => {
    const content = {
      [RequestStatus.PENDING as string]: <LoadingSharingan />,
      [RequestStatus.RESOLVED as string]: (
        <ContentList
          data={dataAsync as IDataContent[]}
          noContent="Jutsu not found"
          onClick={LINKS.jutsu}
        />
      ),
      [RequestStatus.REJECTED as string]: <div>{error?.message}</div>,
      default: <div>Unhandled status: {status}</div>,
    };

    return content[status ?? 'default'];
  };

  return (
    <>
      <Search pathname={JUTSUS} />
      <Alphabet pathname={JUTSUS} letter={letter} setLetter={setLetter} />
      <RenderContent />
    </>
  );
};

export default Jutsus;
