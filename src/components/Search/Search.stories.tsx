import { withKnobs, text } from '@storybook/addon-knobs'
import Search from './Search'

export default {
  component: Search,
  title: 'Components/Search',
  decorators: [withKnobs]
}

export const Default = () => {
  const pathname = text('pathname', '/teams')

  return <Search pathname={pathname} />
}
