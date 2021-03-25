import { GetStaticPropsContext } from 'next'
import PageTitle from '../../components/PageTitle'
import ICharacter from '../../interfaces/character'
import { ROUTES } from '../../constants/urls'
import { getCharacterById, getCharacters } from '../../lib/characters'
import CharacterInfo from '../../components/CharacterInfo'

type PropsCharacter = {
  data: ICharacter
}

type StaticPath = {
  paths: string[]
  fallback: boolean
}

type StaticProps = {
  props: {
    data: ICharacter | null
  }
}

export async function getStaticPaths(): Promise<StaticPath> {
  const data = await getCharacters()
  const paths = data.map((character) => `${ROUTES.characters}/${character.id}`)
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
  const data = await getCharacterById(id)

  return {
    props: {
      data
    }
  }
}

const Character = ({ data }: PropsCharacter) => (
  <>
    <PageTitle title={data.name} />
    <CharacterInfo {...data} />
  </>
)

export default Character
