<script lang='ts'>
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'
  let { data, children } = $props()
  let { session, supabase } = $derived(data)

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
      if (newSession?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth')
      }
    })
    return () => data.subscription.unsubscribe()
  });
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet">
</svelte:head>

<nav>
    {#if session}
        <a href="/">Home</a>
        <a href="/private">Private</a>
        <button onclick={() => supabase.auth.signOut()}>Logout</button>
    {:else}
        <a href="/auth">Login</a>
    {/if}
</nav>

{@render children()}

<style>
    :root {
        --background: #e4e1c6;
        --topbar: #0B1023;
        --card-bg: #EEEEEE;
        --input-bg: #BBE4E6;
        --header: #686667;
        --header-light: #787878;
    }
    nav {
        padding: 0;
        height: 6vh;
        width: 100vw;
        text-align: center;
        background-color: var(--topbar);
        position: fixed;
        margin: 0;
        z-index: 1000;
        top: 0;
        left: 0;
    }
</style>