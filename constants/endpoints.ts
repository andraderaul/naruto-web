export const baseURL =
  process.env.NODE_ENV === "development" && false
    ? "http://localhost:4000/api"
    : process.env.API;

export const CHARACTERS = "/characters";
export const TEAMS = "/teams";
export const JUTSUS = "/jutsus";
export const CHARACTERS_BY_ID = (id: string) => `${CHARACTERS}/${id}`;
export const TEAMS_BY_ID = (id: string) => `${TEAMS}/${id}`;
export const JUTSUS_BY_ID = (id: string) => `${JUTSUS}/${id}`;
