<script>
    import { pokemon } from "../stores/pokestore";

</script>


<h1>Welcome to SvelteKit</h1>

{#each $pokemon as poke}
    <p>{poke.name}</p>
{/each}