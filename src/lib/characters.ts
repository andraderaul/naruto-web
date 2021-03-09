import api from '../services/api'
import ICharacter from '../interfaces/character'
import { GET } from '../constants/verbs'
import { CHARACTERS, CHARACTERS_BY_ID } from '../constants/endpoints'

export async function getCharacters(): Promise<ICharacter[]> {
  try {
    const {
      data: { data }
    } = await api({
      method: GET,
      url: CHARACTERS
    })
    return data
  } catch (error) {
    return []
  }
}

export async function getCharactersByParams(
  params: string,
  letter: string
): Promise<ICharacter[]> {
  try {
    const {
      data: { data }
    } = await api({
      method: GET,
      url: `${CHARACTERS}?${params}=${letter}`
    })

    return data
  } catch (error) {
    // TODO: throw error
    if (error.code === 'ECONNREFUSED') {
      console.error('Server is down')
    } else {
      console.error(error)
      throw error
    }
    return []
  }
}

export async function getCharacterById(id: string): Promise<ICharacter | null> {
  try {
    const { data } = await api({
      method: GET,
      url: CHARACTERS_BY_ID(id)
    })
    return data
  } catch (error) {
    // TODO: throw error
    console.log(error)
    return null
  }
}
