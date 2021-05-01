import { withKnobs } from '@storybook/addon-knobs'
import Header from './Header'

export default {
  component: Header,
  title: 'Components/Header',
  decorators: [withKnobs]
}

export const Default = () => <Header />
