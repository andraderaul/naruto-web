import { withKnobs } from '@storybook/addon-knobs'
import Layout from './Layout'

export default {
  component: Layout,
  title: 'Components/Layout',
  decorators: [withKnobs]
}

export const Default = () => {
  return (
    <>
      <Layout>
        {[1, 2, 3, 4, 5, 6].map((x) => (
          <div
            key={x}
            style={{
              height: '200px',
              width: '100%',
              backgroundColor: 'grey',
              border: '1px solid black'
            }}
          />
        ))}
      </Layout>
    </>
  )
}
