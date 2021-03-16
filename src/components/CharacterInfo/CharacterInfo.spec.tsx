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
    expect(
      screen.getByRole('img', {
        name: character.name
      })
    ).toBeTruthy()
    expect(screen.getByText(character.kanji_name)).toBeTruthy()
    expect(screen.getByText(character.birthday)).toBeTruthy()
    expect(screen.getByText(character.gender)).toBeTruthy()
    expect(screen.getByText(/12 - 13 - 15 - 17/i)).toBeTruthy()
    expect(screen.getByText(/145.3 - 147.5 - 166 - 180/i)).toBeTruthy()
    expect(screen.getByText(/40.1 - 40.6 - 50.9/i)).toBeTruthy()
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
