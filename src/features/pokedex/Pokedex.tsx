import React, { useEffect } from "react";
import { Pokemon } from "pokenode-ts";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
    fetchPokemons,
    selectPokemonList,
    selectPagination
} from "./pokedexSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import { PokeCard } from "../../components/PokeCard";

export function Pokedex() {
    const pagination = useAppSelector(selectPagination);
    const pokeDex = useAppSelector(selectPokemonList);
    const pokemonList = Object.values(pokeDex).sort((v1: Pokemon, v2: Pokemon) => v1.order - v2.order);
    const dispatch = useAppDispatch();
    const fetchData = () => {
        dispatch(fetchPokemons());
    };

    // eslint-disable-next-line
    useEffect(fetchData, []); //TODO: fix dep array eslint error.

    return (
        <div>
            <InfiniteScroll
                dataLength={pokemonList.length} //This is important field to render the next data
                next={fetchData}
                hasMore={pagination.count > pokemonList.length}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {pokemonList.map(p => <PokeCard key={p.name} pokemon={p} />)}
            </InfiniteScroll>
        </div>
    );
}
