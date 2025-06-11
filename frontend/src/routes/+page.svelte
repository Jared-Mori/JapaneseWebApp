<script>
  let { data } = $props();

  // For debugging: log the data to the console
  console.log("Loaded data:", data);
</script>

{#if data && data.instruments && data.instruments.length > 0}
  <ul>
    {#each data.instruments as instrument}
      <li>{instrument.name}</li>
    {/each}
  </ul>
{:else}
  <p>No instruments found or data not loaded.</p>
{/if}

<pre>{JSON.stringify(data, null, 2)}</pre>