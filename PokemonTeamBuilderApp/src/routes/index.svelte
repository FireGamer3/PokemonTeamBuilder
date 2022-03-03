<script>
    import { pokemon } from "../stores/pokestore";
    import PokeCard from "..//components/pokeCard.svelte";

    let searchTerm = "";
    let filteredPokemon = [];

    $: {
        console.log(searchTerm);
        if (searchTerm) {
            filteredPokemon = $pokemon.filter(poke => poke.name.toLowerCase().includes(searchTerm.toLowerCase()) || poke.id == searchTerm)
        }else{
            filteredPokemon = [...$pokemon]
        }
    }
</script>


<h1 class="text-4xl text-center py-8 uppercase">All Pokemon</h1>

<input type="text" class="w-full rounded-md text-lg p-4 border-2 border-gray-200 dark:bg-gray-600" bind:value={searchTerm} placeholder="Search Pokemon"/>

<div class="grid gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-3">
    {#each filteredPokemon as poke}
        <PokeCard poke={poke} />
    {/each}
</div>