import { writable } from "svelte/store";
import { browser } from "$app/env";

const allPokemon = browser ? JSON.parse(window.localStorage.getItem('allPokemon')) ?? [] : [];
console.log(allPokemon[1]);
export const pokemon = writable(allPokemon);

pokemon.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('allPokemon', JSON.stringify(value));
    }
});

const fetchAllPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=898`;
    const res = await fetch(url);
    const data = await res.json();
    const loadedPokemon = data.results.map((data, index) => {
        return {
            name: data.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
        }
    });

    pokemon.set(loadedPokemon);
}
if (allPokemon.length == 0) {
    fetchAllPokemon();
}