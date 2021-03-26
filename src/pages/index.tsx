import client from 'graphql/client'
import Layout from '../components/Layout'
import Slider, { PropsItem } from '../components/Slider/Slider'
import PageTitle from '../components/PageTitle'
import { GET_TEAMS } from '../graphql/queries'
import { GetTeamsQuery } from '../graphql/generated/graphql'

type PropsSliderPreview = {
  name: string
  members: PropsItem[]
}

type PropsHome = {
  teams: PropsSliderPreview[]
}

export async function getStaticProps() {
  const { teams } = await client.request<GetTeamsQuery>(GET_TEAMS)

  return {
    props: {
      teams
    }
  }
}

export default function Home({ teams }: PropsHome): JSX.Element {
  return (
    <>
      <PageTitle title="Naruto Web" />
      <Layout>
        {teams.map((team) => (
          <Slider key={team.name} title={team.name} items={team.members} />
        ))}
      </Layout>
    </>
  )
}
