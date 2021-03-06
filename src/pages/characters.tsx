import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import PageTitle from '../components/PageTitle'
import useAsync, { RequestStatus } from '../hooks/useAsync'
import { getCharactersByParams, getCharacters } from '../lib/characters'
import ICharacter from '../interfaces/character'
import { CHARACTERS } from '../constants/endpoints'
import { LINKS } from '../constants/urls'
import Search from '../components/Search'
import Alphabet from '../components/Alphabet'
import { DataContent } from '../components/ContentList/ContentList'
import RenderContent from '../components/RenderContent'

type PropsCharacter = {
  data: ICharacter[]
}

export async function getStaticProps() {
  const data = await getCharacters()
  return {
    props: {
      data
    }
  }
}

const Characters = ({ data }: PropsCharacter) => {
  const { status, error, data: dataAsync, runPromise } = useAsync({
    status: RequestStatus.RESOLVED,
    data
  })

  const [letter, setLetter] = useState('')
  const router = useRouter()

  useEffect(() => {
    const { query } = router
    if (query.from) {
      const from = query.from as string
      setLetter(from as string)
      return runPromise(getCharactersByParams('from', from))
    }
    if (query.name) {
      const name = query.name as string
      setLetter('')
      return runPromise(getCharactersByParams('name', name))
    }
  }, [router, runPromise])

  return (
    <>
      <PageTitle title={CHARACTERS} />
      <Search pathname={CHARACTERS} />
      <Alphabet letter={letter} setLetter={setLetter} pathname={CHARACTERS} />
      <RenderContent
        onClick={LINKS.character}
        noContentMessage="Character not found"
        status={status}
        error={error?.message || ''}
        data={dataAsync as DataContent[]}
      />
    </>
  )
}

export default Characters
