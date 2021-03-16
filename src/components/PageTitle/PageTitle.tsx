import { useMemo } from 'react'
import Head from 'next/head'

export type IPropsPageTitle = {
  title?: string
}

const PageTitle = ({ title }: IPropsPageTitle) => {
  const formattedTittle = useMemo(() => {
    if (!title) return 'Naruto Web'

    return title
      .replace('/', '')
      .split('')
      .map((letter, index) => (index === 0 ? letter.toUpperCase() : letter))
      .join('')
  }, [title])

  return (
    <Head>
      <title>{formattedTittle}</title>
    </Head>
  )
}

export default PageTitle
