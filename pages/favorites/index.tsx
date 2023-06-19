import { Layout } from '@/components/layouts';
import { FavoritePokemons, NoFavorites } from '@/components/ui';
import { localFavorites } from '@/utils';
import { useEffect, useState } from 'react';

const FavoritesPage = () => {
  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemons(localFavorites.getFavorites());
  }, []);

  return (
    <Layout title='Pokémon - Favoritos'>
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
