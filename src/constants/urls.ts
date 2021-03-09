const BASE = ''

const ROUTES = {
  home: '/',
  characters: `${BASE}/characters`,
  teams: `${BASE}/teams`,
  jutsus: `${BASE}/jutsus`,
  character: `${BASE}/characters/:id`,
  jutsu: `${BASE}/jutsus/:id`,
  team: `${BASE}/teams/:id`
}

const LINKS = {
  character: (id: string) => `${ROUTES.character.replace(':id', id)}`,
  team: (id: string) => `${ROUTES.team.replace(':id', id)}`,
  jutsu: (id: string) => `${ROUTES.jutsu.replace(':id', id)}`
}

export { ROUTES, LINKS }
