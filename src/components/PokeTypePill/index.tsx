import React  from 'react';
import styles from './PokeTypePill.module.css';
import {PokemonType} from "pokenode-ts";

type PokeTypeProps = {
  pokemonType: PokemonType
}
export const PokeTypePill =  ({pokemonType}: PokeTypeProps) => {
    const typeName = pokemonType.type.name;
  return (
      <div className={styles["poke-pill-type"]}>
          <div className={styles[typeName]}>
              {typeName}
          </div>
      </div>
  );
}

