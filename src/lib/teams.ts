import api from '../services/api'
import ITeam from '../interfaces/team'
import { GET } from '../constants/verbs'
import { TEAMS, TEAMS_BY_ID } from '../constants/endpoints'

export async function getTeams(): Promise<ITeam[]> {
  try {
    const {
      data: { data }
    } = await api({
      method: GET,
      url: TEAMS
    })
    return data
  } catch (error) {
    // TODO: throw error
    console.log(error)
    return []
  }
}

export async function getTeamsByParams(
  params: string,
  letter: string
): Promise<ITeam[]> {
  try {
    const {
      data: { data }
    } = await api({
      method: GET,
      url: `${TEAMS}?${params}=${letter}`
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

export async function getTeamsById(id: string): Promise<ITeam | null> {
  try {
    const { data } = await api({
      method: GET,
      url: TEAMS_BY_ID(id)
    })
    return data
  } catch (error) {
    // TODO: throw error
    console.log(error)
    return null
  }
}
