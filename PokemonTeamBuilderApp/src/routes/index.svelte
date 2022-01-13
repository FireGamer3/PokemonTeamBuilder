<script>
    import { pokemon } from "../stores/pokestore";
    import PokeCard from "..//components/pokeCard.svelte";
</script>


<h1>Welcome to SvelteKit</h1>

{#each $pokemon as poke}
    <PokeCard poke={poke} />
{/each}