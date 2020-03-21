import gql from 'graphql-tag'
export const GET_POKEMONS = gql`
    query {
        pokemons(first: 150) {
            id
            name
            image
          }
    }
`;