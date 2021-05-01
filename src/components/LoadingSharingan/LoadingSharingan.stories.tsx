import { withKnobs } from '@storybook/addon-knobs'
import LoadingSharingan from './LoadingSharingan'

export default {
  component: LoadingSharingan,
  title: 'Components/LoadingSharingan',
  decorators: [withKnobs]
}

export const Default = () => <LoadingSharingan />
