import React, { useState, useEffect } from "react";
import useAsync, { RequestStatus } from "../hooks/useAsync";
import { useRouter } from "next/router";
import { getCharactersByParams, getCharacters } from "../lib/characters";
import ICharacter from "../interfaces/character";
import { CHARACTERS } from "../constants/endpoints";
import { LINKS } from "../constants/urls";
import Search from "../components/Search";
import Alphabet from "../components/Alphabet";
import LoadingSharingan from "../components/LoadingSharingan";
import ContentList, {
  IDataContent,
} from "../components/ContentList/ContentList";

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

  const [letter, setLetter] = useState("");
  const router = useRouter();

  useEffect(() => {
    const { query } = router;
    if (query.from) {
      const from = query.from as string;
      setLetter(from as string);
      return runPromise(getCharactersByParams("from", from));
    } else if (query.name) {
      const name = query.from as string;
      setLetter("");
      return runPromise(getCharactersByParams("name", name));
    }
  }, [router]);

  const RenderContent = () => {
    const content = {
      [RequestStatus.PENDING as string]: <LoadingSharingan />,
      [RequestStatus.RESOLVED as string]: (
        <ContentList
          data={dataAsync as IDataContent[]}
          noContent="Jutsu not found"
          onClick={LINKS.character}
        />
      ),
      [RequestStatus.REJECTED as string]: <div>{error?.message}</div>,
      default: <div>Unhandled status: {status}</div>,
    };

    return content[status ?? "default"];
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
