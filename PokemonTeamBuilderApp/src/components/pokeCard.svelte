<script>
    export let poke;
</script>

<a href={`/pokemon/${poke.id}`} 
    class="p-6 bg-gray-600 text-center 
        rounded-md dark:shadow-gray-400 shadow-sm hover:shadow-md 
        flex flex-row items-center">
    <img src="{poke.image}" alt="{poke.name}">
    <h2 class="uppercase text-2xl">{poke.id}. {poke.name}</h2>
</a>