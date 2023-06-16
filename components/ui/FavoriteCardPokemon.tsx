import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

interface props {
  pokemonId: number;
}

export const FavoriteCardPokemon: FC<props> = ({ pokemonId }) => {
  const router = useRouter();

  const onFavoriteClick = () => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId} onClick={onFavoriteClick}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          alt={`Pokemon ${pokemonId}`}
          width='100%'
          height={140}
        ></Card.Image>
      </Card>
    </Grid>
  );
};
