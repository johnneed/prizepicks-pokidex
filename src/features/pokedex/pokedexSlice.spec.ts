import {  populatePokedex, updatePagination } from "./pokedexSlice";
import { Pokemon } from "pokenode-ts";

jest.mock('pokenode-ts', ()=> {
    return {
        PokemonClient: class {
            constructor() {
                // @ts-ignore
                this.getPokemonByName = jest.fn().mockImplementation(() => {
                    return {}
                });
                // @ts-ignore
                this.listPokemons = jest.fn().mockImplementation(() => {
                    return {}
                });
            }
        }
    }
});


describe("updatePagination action", () => {
    it("should update pagination", () => {
        const foo = updatePagination({ count: 1000, offset: 20, limit: 20 });
        console.log(JSON.stringify(foo));
        expect(foo).toEqual({
            "payload": {
                "count": 1000,
                "limit": 20,
                "offset": 20
            },
            "type": "pokedex/updatePagination"
        })
    });
});

describe("populatePokedex action", () => {

    const testPokemon : Pokemon =  {
                abilities: [
                    {
                        ability: {
                            name: "shield-dust",
                            url: "https://pokeapi.co/api/v2/ability/19/"
                        },
                        is_hidden: false,
                        slot: 1
                    },

                ],
                base_experience: 39,
                forms: [
                    {
                        name: "squirtle",
                        url: "https://pokeapi.co/api/v2/pokemon-form/13/"
                    }
                ],
                game_indices: [
                    {
                        game_index: 112,
                        version: {
                            name: "red",
                            url: "https://pokeapi.co/api/v2/version/1/"
                        }
                    }
                ],
                height: 3,
                held_items: [],
                id: 13,
                is_default: true,
                location_area_encounters: "https://pokeapi.co/api/v2/pokemon/13/encounters",
                moves: [
                    {
                        move: {
                            name: "poison-sting",
                            url: "https://pokeapi.co/api/v2/move/40/"
                        },
                        version_group_details: [
                            {
                                level_learned_at: 1,
                                move_learn_method: {
                                    name: "level-up",
                                    url: "https://pokeapi.co/api/v2/move-learn-method/1/"
                                },
                                version_group: {
                                    name: "red-blue",
                                    url: "https://pokeapi.co/api/v2/version-group/1/"
                                }
                            }
                        ]
                    }

                ],
                name: "squirtle",
                order: 17,
                past_types: [],
                species: {
                    name: "squirtle",
                    url: "https://pokeapi.co/api/v2/pokemon-species/13/"
                },
                sprites: {
                    back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/13.png",
                    back_female: null,
                    back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/13.png",
                    back_shiny_female: null,
                    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
                    front_female: null,
                    front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/13.png",
                    front_shiny_female: null,
                    other: {
                        dream_world: {
                            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg",
                            front_female: null
                        },
                        home: {
                            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/13.png",
                            front_female: null,
                            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/13.png",
                            front_shiny_female: null
                        },
                        "official-artwork": {
                            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
                        }
                    },
                    versions: {
                        "generation-i": {
                            "red-blue": {
                                back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/13.png",
                                back_gray: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/13.png",
                                back_transparent: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/13.png",
                                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/13.png",
                                front_gray: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/13.png",
                                front_transparent: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/13.png"
                            },
                            yellow: {
                                back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/13.png",
                                back_gray: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/13.png",
                                back_transparent: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/13.png",
                                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/13.png",
                                front_gray: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/13.png",
                                front_transparent: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/13.png"
                            }
                        },
                        "generation-ii": {
                            crystal: {
                                back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/13.png",
                                back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/13.png",
                                back_shiny_transparent: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/13.png",
                                back_transparent: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/13.png",
                                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/13.png",
                                front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/13.png",
                                front_shiny_transparent: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/13.png",
                                front_transparent: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/13.png"
                            },
                            gold: {
                                back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/13.png",
                                back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/13.png",
                                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/13.png",
                                front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/13.png",
                                front_transparent: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/13.png"
                            },
                            silver: {
                                back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/13.png",
                                back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/13.png",
                                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/13.png",
                                front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/13.png",
                                front_transparent: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/13.png"
                            }
                        },
                        "generation-iii": {
                            emerald: {
                                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/13.png",
                                front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/13.png"
                            },
                            "firered-leafgreen": {
                                back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/13.png",
                                back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/13.png",
                                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/13.png",
                                front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/13.png"
                            },
                            "ruby-sapphire": {
                                back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/13.png",
                                back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/13.png",
                                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/13.png",
                                front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/13.png"
                            }
                        },
                        "generation-iv": {
                            "diamond-pearl": {
                                back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/13.png",
                                back_female: null,
                                back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/13.png",
                                back_shiny_female: null,
                                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/13.png",
                                front_female: null,
                                front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/13.png",
                                front_shiny_female: null
                            },
                            "heartgold-soulsilver": {
                                back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/13.png",
                                back_female: null,
                                back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/13.png",
                                back_shiny_female: null,
                                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/13.png",
                                front_female: null,
                                front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/13.png",
                                front_shiny_female: null
                            },
                            platinum: {
                                back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/13.png",
                                back_female: null,
                                back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/13.png",
                                back_shiny_female: null,
                                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/13.png",
                                front_female: null,
                                front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/13.png",
                                front_shiny_female: null
                            }
                        },
                        "generation-v": {
                            "black-white": {
                                animated: {
                                    back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/13.gif",
                                    back_female: null,
                                    back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/13.gif",
                                    back_shiny_female: null,
                                    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/13.gif",
                                    front_female: null,
                                    front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/13.gif",
                                    front_shiny_female: null
                                },
                                back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/13.png",
                                back_female: null,
                                back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/13.png",
                                back_shiny_female: null,
                                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/13.png",
                                front_female: null,
                                front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/13.png",
                                front_shiny_female: null
                            }
                        },
                        "generation-vi": {
                            "omegaruby-alphasapphire": {
                                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/13.png",
                                front_female: null,
                                front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/13.png",
                                front_shiny_female: null
                            },
                            "x-y": {
                                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/13.png",
                                front_female: null,
                                front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/13.png",
                                front_shiny_female: null
                            }
                        },
                        "generation-vii": {
                            icons: {
                                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/13.png",
                                front_female: null
                            },
                            "ultra-sun-ultra-moon": {
                                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/13.png",
                                front_female: null,
                                front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/13.png",
                                front_shiny_female: null
                            }
                        },
                        "generation-viii": {
                            icons: {
                                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/13.png",
                                front_female: null
                            }
                        }
                    }
                },
                stats: [
                    {
                        base_stat: 40,
                        effort: 0,
                        stat: {
                            name: "hp",
                            url: "https://pokeapi.co/api/v2/stat/1/"
                        }
                    }
                ],
                types: [
                    {
                        slot: 1,
                        type: {
                            name: "bug",
                            url: "https://pokeapi.co/api/v2/type/7/"
                        }
                    }
                ],
                weight: 32
    };



    it("should populate new pokemon", () => {
        expect(populatePokedex({squirtle: testPokemon})).toEqual({
            "payload": {
                "squirtle": testPokemon,
            },
            "type": "pokedex/populatePokedex"
        });
    });
});
