<script lang='ts'>
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'
  import ProfilePopup from '$lib/profilePopup.svelte'
  import { theme } from '$lib/stores/theme'

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

<div class={ $theme }>
    <nav>
        <a href="/" class="home-link">Home</a>
        <div class="nav-links">
            <a href="/counter">Counter</a>
            {#if session}
                <ProfilePopup {supabase} />
            {:else}
                <a href="/auth">Login</a>
            {/if}
        </div>
    </nav>
    <div class="container">
        {@render children()}
    </div>
</div>


<style>
    @import '../lib/styles/themes.css';
    nav {
        padding: 0;
        height: 6vh;
        width: 100vw;
        text-align: center;
        background-color: var(--color1);
        position: fixed;
        margin: 0;
        z-index: 1000;
        top: 0;
        left: 0;
        display : flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'Noto Sans JP', sans-serif;
        color: white;
        font-weight: 400;
        font-size: 1.2rem;
        box-shadow: 0 8px 32px rgba(0,0,0,0.18);
    }
    .nav-links {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-right: 15vw;
    }
    .home-link {
        color: white;
        font-weight: bold;
        font-size: 1.5rem;
        text-decoration: none;
        margin-left: 15vw;
    }
    .container {
        background-color: var(--color2);
        width: 100vw;
        height: 100vh;
        display: flex;
        position: fixed;
        font-family: 'Noto Sans JP', sans-serif;
        margin: 0;
        padding: 0;
        left: 0;
        top: 0;
    }
</style>