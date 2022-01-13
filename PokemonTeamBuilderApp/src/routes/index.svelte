<script>
    import { pokemon } from "../stores/pokestore";
    import PokeCard from "..//components/pokeCard.svelte";
</script>


<h1 class="text-4xl text-center py-8 uppercase">Pokemon Team Builder</h1>

<div class="grid gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
    {#each $pokemon as poke}
        <PokeCard poke={poke} />
    {/each}
</div>