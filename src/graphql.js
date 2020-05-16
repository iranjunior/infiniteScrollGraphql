import gql from 'graphql-tag'
export const GET_REPOSITORIES = gql`
query { 
    user(login: "iranjunior") {
        repositories (first: 5){
            edges {
                cursor,
                    node {
                         id,
                         name,
                         description,
                    }
                }
            }
        } 
    }
`;