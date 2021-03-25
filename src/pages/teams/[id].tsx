import { GetStaticPropsContext } from 'next'
import PageTitle from '../../components/PageTitle'
import ITeam from '../../interfaces/team'
import { ROUTES } from '../../constants/urls'
import { getTeams, getTeamsById } from '../../lib/teams'

type PropsTeam = {
  data: ITeam
}

type StaticPath = {
  paths: string[]
  fallback: boolean
}

type StaticProps = {
  props: {
    data: ITeam | null
  }
}

export async function getStaticPaths(): Promise<StaticPath> {
  const data = await getTeams()
  const paths = data.map((team) => `${ROUTES.teams}/${team.id}`)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<StaticProps> {
  const { params } = context
  const id = params?.id as string
  const data = await getTeamsById(id)

  return {
    props: {
      data
    }
  }
}

const Team = ({ data }: PropsTeam) => (
  <>
    <PageTitle title={data.name} />
    <div
      style={{
        marginTop: '10rem'
      }}
    >
      <p>{data.name}</p>
    </div>
  </>
)

export default Team
