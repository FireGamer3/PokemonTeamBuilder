<script>
    import { pokemon } from "../stores/pokestore";
    import { favorites } from "../stores/favoritesStore";
    import PokeCard from "..//components/pokeCard.svelte";

    let searchTerm = "";
    let filteredPokemon = [];

    $: {
        console.log(searchTerm);
        if (searchTerm) {
            filteredPokemon = [...$pokemon].filter(poke => $favorites.favs.indexOf(poke.id) != -1).filter(poke => poke.name.toLowerCase().includes(searchTerm.toLowerCase()) || poke.id == searchTerm)
        }else{
            filteredPokemon = [...$pokemon].filter(poke => $favorites.favs.indexOf(poke.id) != -1);
        }
    }
</script>


<h1 class="text-4xl text-center py-8 uppercase">Favorite Pokemon</h1>


{#if filteredPokemon.length == 0}
    <p class="text-center py-8 text-2xl">You don't have any favorites! Try finding some pokemon <a href="/" class="text-blue-500 underline">Here</a></p>
{:else}
    <input type="text" class="w-full rounded-md text-lg p-4 border-2 border-gray-200 dark:bg-gray-600" bind:value={searchTerm} placeholder="Search Pokemon"/>
    <div class="grid gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-3">
        {#each filteredPokemon as poke}
            <PokeCard poke={poke} />
        {/each}
    </div>
{/if}