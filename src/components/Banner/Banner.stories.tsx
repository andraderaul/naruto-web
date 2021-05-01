import { withKnobs } from '@storybook/addon-knobs'
import Banner from './Banner'

export default {
  component: Banner,
  title: 'Components/Banner',
  decorators: [withKnobs]
}

export const Default = () => <Banner />
