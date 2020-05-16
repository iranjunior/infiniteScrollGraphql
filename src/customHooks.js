import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from './graphql';

export const useRepositories = () => {
    const { 
        data,
   //     fetchMore,
        loading
    } = useQuery(GET_REPOSITORIES, {
        notifyOnNetworkStatusChange: true,
    });

    if(loading && !data?.user) {
        return {
            loading,
            user: {
                repositories: {
                    edges: []
                }
            }
        }
    }

    /* const loadMore = () => {
        return fetchMore({
            query: GET_REPOSITORIES,
            notifyOnNetworkStatusChangea: true,
            variables: {
                after: data.user.repositories.edges[5].cursor
            },
            updateQuery: (previousResult, {fetchMoreResult}) => {
                return fetchMoreResult.user.repositories.edges.length ? Object.assign(previousResult, fetchMoreResult): previousResult;
            }
        })
    };
 */
    return {
        user: data.user,
        loading,
/*         loadMore,
        hasNextPage: data.user.repositories.edges.length  === 5,
 */    }
}
