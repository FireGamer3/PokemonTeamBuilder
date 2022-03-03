<script>
    export let stats;
</script>

<table class="table-auto shadow-md bg-white dark:bg-gray-600 dark:shadow-gray-500">
  <thead>
    <tr>
      <th class="bg-gray-500 border text-left px-16 py-2">Stat</th>
      <th class="bg-gray-500 border text-left px-8 py-2">Value</th>
    </tr>
  </thead>
  <tbody>
      {#each stats as stat}
        <tr>
            <td class="border px-8 py-4 uppercase">{stat.stat.name}</td>
            <td class="text-center border px-8 py-4">{stat.base_stat}</td>
        </tr>
      {/each}
  </tbody>
</table>