<script>
    export let poke;
</script>

<a href={`/pokemon/${poke.id}`} 
    class="p-6 bg-gray-600 text-center 
        rounded-md dark:shadow-gray-400 shadow-sm hover:shadow-md 
        flex flex-col items-center">
    <img class="h-40 w-40" src="{poke.image}" alt="{poke.name}">
    <h2 class="uppercase text-2xl">{poke.id}. {poke.name}</h2>
</a>