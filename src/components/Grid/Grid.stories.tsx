import { withKnobs } from '@storybook/addon-knobs'
import Grid from './Grid'

export default {
  component: Grid,
  title: 'Components/Grid',
  decorators: [withKnobs]
}

export const Default = () => {
  return (
    <>
      <Grid>
        {[1, 2, 3, 4, 5, 6].map((x) => (
          <div
            key={x}
            style={{
              height: '200px',
              width: '300px',
              backgroundColor: 'grey',
              border: '1px solid black'
            }}
          />
        ))}
      </Grid>
    </>
  )
}
