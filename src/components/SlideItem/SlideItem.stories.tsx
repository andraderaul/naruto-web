import { withKnobs, text } from '@storybook/addon-knobs'
import SlideItem from './SlideItem'
import 'swiper/swiper.min.css'

export default {
  component: SlideItem,
  title: 'Components/SlideItem',
  decorators: [withKnobs]
}

export const Default = () => {
  const url = text(
    'url',
    'https://i.pinimg.com/originals/a0/68/a5/a068a5bf3dc4a260f2fc4c25426fed45.jpg'
  )
  const name = text('name', 'Naruto')
  const color = text('color', '#D65F01')

  return (
    <div style={{ marginTop: '30px' }}>
      <SlideItem url={url} name={name} color={color} />
    </div>
  )
}
