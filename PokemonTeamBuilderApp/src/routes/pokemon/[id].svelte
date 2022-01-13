<script context="module">
    export async function load({params}) {
        const id = params.id;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        return { props: {poke: data, id}};
    }
</script>

<script>
    import StatsTable from "../../components/statsTable.svelte";
    export let poke;
    export let id;

    let types = poke.types.map(e => e.type.name).join(', ');
</script>

<div class="flex flex-col items-center">
    <h1 class="uppercase text-4xl text-center my-8">#{id} {poke.name}</h1>
    
    <img class="h-40 w-40" src="{poke.sprites['front_default']}" alt="{poke.name}">
    
    <h2 class="uppercase text-2xl text-center my-8"><strong>{types}</strong></h2>
    <h2 class="uppercase text-2xl text-center">Height: <strong>{poke.height}</strong></h2>
    <h2 class="uppercase text-2xl text-center">Weight: <strong>{poke.weight}</strong></h2>
    <h2 class="uppercase text-2xl text-center my-8">Base Stats</h2>
    <StatsTable stats={poke.stats} />
</div>