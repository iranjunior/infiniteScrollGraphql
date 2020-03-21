import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from './graphql';

export const usePokemons = () => {
    const { data, loading, fetchMore } = useQuery(GET_POKEMONS, { notifyOnNetworkStatusChange: true })
    if (loading && !data.pokemons) { return {loading, pokemons: []} }
    
}; 