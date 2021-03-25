import { useMemo } from 'react'
import Head from 'next/head'

export type PropsPageTitle = {
  title?: string
}

const PageTitle = ({ title }: PropsPageTitle) => {
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
