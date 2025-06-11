<script>
  export let data;
  console.log(import.meta.env.PUBLIC_SUPABASE_URL);
</script>

<ul>
  {#each data.countries as country}
    <li>{country.name}</li>
  {/each}
</ul>