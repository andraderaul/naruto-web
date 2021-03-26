import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PageTitle from '../components/PageTitle'
import { getJutsus, getJutsusByParams } from '../lib/jutsus'
import IJutsu from '../interfaces/jutsu'
import { JUTSUS } from '../constants/endpoints'
import Search from '../components/Search'
import Alphabet from '../components/Alphabet'
import useAsync, { RequestStatus } from '../hooks/useAsync'
import { LINKS } from '../constants/urls'
import RenderContent from '../components/RenderContent'
import { DataContent } from '../components/ContentList/ContentList'

type PropsJutsu = {
  data: IJutsu[]
}

export async function getStaticProps() {
  const data = await getJutsus()
  return {
    props: {
      data
    }
  }
}

const Jutsus = ({ data }: PropsJutsu) => {
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
      setLetter(from)
      return runPromise(getJutsusByParams('from', from))
    }
    if (query.name) {
      const name = query.name as string
      setLetter('')
      return runPromise(getJutsusByParams('name', name))
    }
  }, [router, runPromise])

  return (
    <>
      <PageTitle title={JUTSUS} />
      <Search pathname={JUTSUS} />
      <Alphabet pathname={JUTSUS} letter={letter} setLetter={setLetter} />
      <RenderContent
        onClick={LINKS.jutsu}
        noContentMessage="Jutsus not found"
        status={status}
        error={error?.message || ''}
        data={dataAsync as DataContent[]}
      />
    </>
  )
}

export default Jutsus
