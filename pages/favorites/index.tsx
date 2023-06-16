import { Layout } from '@/components/layouts';
import { FavoritePokemons, NoFavorites } from '@/components/ui';
import { localFavorites } from '@/utils';
import { Card, Container, Grid, Image, Text } from '@nextui-org/react';
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
        // <Grid.Container gap={2} direction='row' justify='flex-start'>
        //   {favoritePokemons.map((id) => (
        //     <Grid xs={6} sm={3} md={2} xl={1} key={id}>
        //       <Card isHoverable isPressable css={{ padding: 10 }}>
        //         <Card.Image
        //           src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        //           alt={`Pokemon ${id}`}
        //           width='100%'
        //           height={140}
        //         ></Card.Image>
        //       </Card>
        //     </Grid>
        //   ))}
        // </Grid.Container>
      )}
    </Layout>
  );
};

export default FavoritesPage;
