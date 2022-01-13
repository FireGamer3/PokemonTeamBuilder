<script>
    export let poke;
</script>

<a href={`/pokemon/${poke.id}`}>
    <img src="{poke.image}" alt="{poke.name}">
    {poke.id}. {poke.name}
</a>