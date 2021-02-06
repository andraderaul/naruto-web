import api from '../services/api';
import IJutsu from '../interfaces/jutsu';
import { GET } from '../constants/verbs';
import { JUTSUS } from '../constants/endpoints';

export async function getJutsus(): Promise<IJutsu[]> {
  try {
    const {
      data: { data },
    } = await api({
      method: GET,
      url: JUTSUS,
    });
    return data;
  } catch (error) {
    //TODO: throw error
    console.log(error);
    return [];
  }
}
