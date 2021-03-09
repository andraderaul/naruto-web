import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme as render } from '../../util/mock/theme.mock'
import CharacterInfo from '.'
import ICharacter from '../../interfaces/character'
import charactersMock from '../../util/mock/data/charactres'

describe('<CharacterInfo />', () => {
  it('should render CharacterInfo with whole info', async () => {
    const character = charactersMock[2] as ICharacter
    render(<CharacterInfo {...character} />)

    const nodeCharacterInfo = await waitFor(() =>
      screen.getByTestId('character-info')
    )
    expect(nodeCharacterInfo).toBeTruthy()

    const nodeName = await waitFor(() => screen.getAllByText(character.name))
    expect(nodeName).toBeTruthy()
  })

  it('should render CharacterInfo with part info', async () => {
    const character = charactersMock[1] as ICharacter
    render(<CharacterInfo {...character} />)

    const nodeCharacterInfo = await waitFor(() =>
      screen.getByTestId('character-info')
    )
    expect(nodeCharacterInfo).toBeTruthy()
  })
})
