import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PageTitle from '../components/PageTitle'
import { getTeams, getTeamsByParams } from '../lib/teams'
import ITeam from '../interfaces/team'
import { LINKS } from '../constants/urls'
import { TEAMS } from '../constants/endpoints'
import Search from '../components/Search'
import Alphabet from '../components/Alphabet'
import useAsync, { RequestStatus } from '../hooks/useAsync'
import { IDataContent } from '../components/ContentList/ContentList'
import RenderContent from '../components/RenderContent'

interface IPropsTeam {
  data: ITeam[]
}

interface IStaticProps {
  props: {
    data: ITeam[]
  }
}
export async function getStaticProps(): Promise<IStaticProps> {
  const data = await getTeams()
  return {
    props: {
      data
    }
  }
}

const Teams = ({ data }: IPropsTeam) => {
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
      return runPromise(getTeamsByParams('from', from))
    }
    if (query.name) {
      const name = query.name as string
      setLetter('')
      return runPromise(getTeamsByParams('name', name))
    }
  }, [router, runPromise])

  return (
    <>
      <PageTitle title={TEAMS} />
      <Search pathname={TEAMS} />
      <Alphabet pathname={TEAMS} letter={letter} setLetter={setLetter} />
      <RenderContent
        onClick={LINKS.team}
        noContentMessage="Team not found"
        status={status}
        error={error?.message || ''}
        data={dataAsync as IDataContent[]}
      />
    </>
  )
}

export default Teams