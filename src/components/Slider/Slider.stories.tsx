import { withKnobs, text } from '@storybook/addon-knobs'
import Slider from './Slider'
import 'swiper/swiper.min.css'

export default {
  component: Slider,
  title: 'Components/Slider',
  decorators: [withKnobs]
}

export const Default = () => {
  const title = text('title', 'Team 7')
  const data = [
    {
      url:
        'https://i.pinimg.com/originals/a0/68/a5/a068a5bf3dc4a260f2fc4c25426fed45.jpg',
      name: 'Naruto',
      color: '#D65F01'
    },
    {
      url:
        'https://nerdhits.com.br/wp-content/uploads/2020/09/sasuke-uchiha.jpg',
      name: 'Sasuke',
      color: '#6E6F84'
    },
    {
      url:
        'https://criticalhits.com.br/wp-content/uploads/2020/08/quiz-sakura-naruto-shippuden.jpg',
      name: 'Sakura',
      color: '#B3A1A0'
    },
    {
      url:
        'https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2020/06/legiao_wbR9BxtXj5IW.png.jpeg',
      name: 'Kakashi',
      color: '#4D5266'
    }
  ]

  return (
    <>
      <Slider title={title} items={data} />
    </>
  )
}
