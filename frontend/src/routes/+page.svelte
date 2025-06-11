<script>
    export let data;
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