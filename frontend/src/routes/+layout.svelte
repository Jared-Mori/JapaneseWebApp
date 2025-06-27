<script lang='ts'>
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'
  import { theme } from '$lib/stores/theme'
  import { goto } from '$app/navigation'

  import Hanafuda from '$lib/hanafuda.svelte';
  import Flipcard from '$lib/flipcard.svelte';

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

<div class={ $theme }>
    <nav>
        <div class="home-button">
            <Flipcard hoverFlip={true} width={6}>
                {#snippet front()}
                    <Hanafuda width={6} card="/hanafuda/32.svg">
                        <button class="home" onclick={() => goto('/')} aria-label="Home"></button>
                    </Hanafuda>
                {/snippet}
                {#snippet back()}
                    <Hanafuda width={6} card="/hanafuda/83.svg">
                        <button class="home" onclick={() => goto('/')} aria-label="Home">家</button>
                    </Hanafuda>
                {/snippet}
            </Flipcard> 
        </div>

        <div class="nav-button">
            {#if session}
                <Flipcard hoverFlip={true} width={6}>
                    {#snippet front()}
                        <Hanafuda width={6} card="/hanafuda/10.svg">
                            <button class="profile" onclick={() => goto('/profile')} aria-label="Profile"></button>
                        </Hanafuda>
                    {/snippet}
                    {#snippet back()}
                        <Hanafuda width={6} card="/hanafuda/83.svg">
                            <button class="profile" onclick={() => goto('/profile')} aria-label="Profile">自</button>
                        </Hanafuda>
                    {/snippet}
                </Flipcard> 
            {:else}
                <a href="/auth">Login</a>
            {/if}
        </div>
    </nav>
    <div class="container" id="background">
        {@render children()}
    </div>
</div>


<style>
    @import '../lib/styles/themes.css';
    @import '../lib/styles/fonts.css';
    :root {
        --color6: #4f0e26;
        --color7: #2b352c;
        --color8: #061c3a;
        --color9: #b69076;
        --color10: #2f2a2e;
        --color11: #9a4d4d;
        --color12: #d2382d;
        --color13: #1b1b1b;
    }
    nav {
        padding: 0;
        height: 3.5vw;
        width: 100vw;
        text-align: center;
        position: fixed;
        margin: 0;
        z-index: 1000;
        top: 0;
        left: 0;
        display : flex;
        justify-content: space-between;
        background-color: var(--color13);
        opacity: 1;
        border-bottom: 4px solid var(--color12);
    }
    .nav-button {
        margin-right: 2vw;
        margin-top: 2vh;
    }
    .home-button {
        margin-left: 2vw;
        margin-top: 2vh;
    }
    .home, .profile {
        color: #a62329;
        font-family: var(--hina-mincho);
        font-weight: 600;
        font-size: 3rem;
        width: 100%;
        height: 100%;
        background: none;
        border: none;
        padding: 0;
    }
    .container {
        width: 100vw;
        height: 100vh;
        display: flex;
        position: fixed;
        margin: 0;
        padding: 0;
        left: 0;
        top: 0vh;
    }
    .container::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url('/paper.jpg');
        background-size: cover;
        opacity: .3;
        z-index: -1;
    }
    .container::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--color2);
        opacity: .4;
        z-index: -2;
    }
    .link {
        color: var(--color4);
        background-color: var(--color2);
        text-decoration: none;
        font-weight: 400;
        font-size: 1.2rem;
        padding: 0.25rem .5rem;
        border-radius: 0.45rem;
    }
</style>