import React, { useState } from 'react';
import styles from './PokeCard.module.css';
import {Pokemon} from "pokenode-ts";
import logo from "../../poke_ball_icon.svg";
import {PokeTypePill} from "../PokeTypePill";

type PokeCardProps = {
  pokemon: Pokemon
}
export const PokeCard =  ({pokemon}: PokeCardProps) => {
   const [isFlipped, setIsFlipped] = useState(false);
  const image = pokemon.sprites.other?.["official-artwork"].front_default || pokemon.sprites.front_default || logo;
  const smallImage  = pokemon.sprites.front_default || logo;
  return (
      <div className={styles.pokecard}>
        <article className={isFlipped ? styles["pokecard_show-back"]: styles["pokecard_show-front"]} onClick={()=>setIsFlipped(!isFlipped)}>
          <section className={styles.pokecard_front}>
            <div className={styles.pokecard_name}>{pokemon.name}</div>
            <div className={styles.pokecard_pic}>
              <img className={styles.pokecard_image} alt={pokemon.name} src={image} />
            </div>
            <div className={styles.pokecard_types}>
              {pokemon.types.map(t => (<PokeTypePill pokemonType={t}/>))}
            </div>
          </section>
          <section className={styles.pokecard_back}>
            <div className={styles["pokecard_back-header"]}>
              <img className={styles["pokecard_small-image"]} alt={pokemon.name} src={smallImage} />
              <div className={styles.pokecard_name}>{pokemon.name}</div>
            </div>
            <div className={styles.pokecard_faqs}>
              <div><span>Height</span><span>{pokemon.height}</span></div>
              <div><span>Weight</span><span>{pokemon.weight}</span></div>
              <div><span>Abilities</span></div>
              <div><div>{
                  pokemon
                      .abilities
                      .filter(a => !a.is_hidden)
                      .map(a => (<div>{a.ability.name}</div>))
                }</div>
              </div>
            </div>
            <div className={styles.pokecard_stats}>
              {pokemon.stats.map(stat => (<div><span>{stat.stat.name}</span><span>{stat.base_stat}</span></div>))}
            </div>

          </section>
        </article>
      </div>
  );
}

