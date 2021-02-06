import api from '../services/api';
import ITeam from '../interfaces/team';
import { GET } from '../constants/verbs';
import { TEAMS } from '../constants/endpoints';

export async function getTeams(): Promise<ITeam[]> {
  try {
    const {
      data: { data },
    } = await api({
      method: GET,
      url: TEAMS,
    });
    return data;
  } catch (error) {
    //TODO: throw error
    console.log(error);
    return [];
  }
}
