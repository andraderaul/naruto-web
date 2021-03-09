import api from '../services/api'
import IJutsu from '../interfaces/jutsu'
import { GET } from '../constants/verbs'
import { JUTSUS } from '../constants/endpoints'

export async function getJutsus(): Promise<IJutsu[]> {
  try {
    const {
      data: { data }
    } = await api({
      method: GET,
      url: JUTSUS
    })
    return data
  } catch (error) {
    return []
  }
}

export async function getJutsusByParams(
  params: string,
  letter: string
): Promise<IJutsu[]> {
  try {
    const {
      data: { data }
    } = await api({
      method: GET,
      url: `${JUTSUS}?${params}=${letter}`
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
