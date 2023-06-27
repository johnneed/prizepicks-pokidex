import React, { useState, useEffect } from 'react';
import {Pokemon} from "pokenode-ts";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchPokemons,
  populatePokedex,
  selectPokemonList
} from './pokedexSlice';
import {PokeCard} from '../../components/PokeCard';
import styles from './Pokedex.module.css';

export function Pokedex() {
  const pokeDex = useAppSelector(selectPokemonList);
  const pokemonList = Object.values(pokeDex).sort((v1: Pokemon, v2: Pokemon) => v1.id - v2.id)
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(fetchPokemons())
    }, []); // See Note 2

  return (
    <div>
      {pokemonList.map(p => <PokeCard pokemon={p}/>)}
    </div>
  );
}
