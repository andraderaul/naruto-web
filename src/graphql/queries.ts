import { gql } from 'graphql-request'

export const GET_TEAMS = gql`
  query getTeams($first: Int) {
    teams(first: $first) {
      name
      members
    }
  }
`
