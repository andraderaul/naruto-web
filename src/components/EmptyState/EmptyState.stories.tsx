import { withKnobs, text } from '@storybook/addon-knobs'
import EmptyState from './EmptyState'

export default {
  component: EmptyState,
  title: 'Components/EmptyState',
  decorators: [withKnobs]
}

export const Default = () => {
  const description = text('description', 'not found')

  return <EmptyState description={description} />
}
