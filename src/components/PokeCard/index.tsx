import React, { useState } from 'react';
import styles from './PokeCard.module.css';
import {Pokemon} from "pokenode-ts";

type PokeCardProps = {
  pokemon: Pokemon
}
export const PokeCard =  ({pokemon}: PokeCardProps) => (<div>{pokemon.name}</div>);

