<script context="module">
    export async function load({params}) {
        const id = params.id;
        const url = `https://pokeapi.co/api/v2/pokemon/${parseInt(id)}`;
        const res = await fetch(url);
        console.log(res);
        const data = await res.json();
        return { props: {poke: data, id}};
    }
</script>

<script>
    import StatsTable from "../../components/statsTable.svelte";
    import Favorite from "../../components/favorite.svelte";
    export let poke;
    export let id;

    let types = poke.types.map(e => e.type.name).join(', ');
    let abilities = poke.abilities.map(e => {
        return e.ability.name + (e.is_hidden ? ' (hidden) ' : ' ');
    }).join(', ');
</script>

<div class="flex flex-col items-center">
    <h1 class="uppercase text-4xl text-center my-8">#{id} {poke.name}</h1>
    <Favorite id={parseInt(id)} />
    <img class="h-40 w-40" src="{poke.sprites['front_default']}" alt="{poke.name}">
    
    <h2 class="uppercase text-2xl text-center mt-8">Type(s): <strong>{types}</strong></h2>
    <h2 class="uppercase text-2xl text-center mb-8">Abilities: <strong>{abilities}</strong></h2>
    <h2 class="uppercase text-2xl text-center">Height: <strong>{poke.height}</strong></h2>
    <h2 class="uppercase text-2xl text-center">Weight: <strong>{poke.weight}</strong></h2>
    <h2 class="uppercase text-2xl text-center my-8">Base Stats</h2>
    <StatsTable stats={poke.stats} />
</div>