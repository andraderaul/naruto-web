import { GetStaticPropsContext } from 'next'
import PageTitle from '../../components/PageTitle'
import IJutsu from '../../interfaces/jutsu'
import { ROUTES } from '../../constants/urls'
import { getJutsus, getJutsusById } from '../../lib/jutsus'

type PropsJutsu = {
  data: IJutsu
}

type StaticPath = {
  paths: string[]
  fallback: boolean
}

type StaticProps = {
  props: {
    data: IJutsu | null
  }
}

export async function getStaticPaths(): Promise<StaticPath> {
  const data = await getJutsus()
  const paths = data.map((jutsus) => `${ROUTES.jutsus}/${jutsus.id}`)

  console.log(paths)
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
  const data = await getJutsusById(id)

  return {
    props: {
      data
    }
  }
}

const Jutsu = ({ data }: PropsJutsu) => (
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

export default Jutsu
