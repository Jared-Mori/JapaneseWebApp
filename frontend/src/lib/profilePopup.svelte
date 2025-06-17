<!-- ProfileMenu.svelte -->
<script lang="ts">
  let { supabase } = $props();

  let open = $state(false);
  let menuRef: HTMLDivElement | null = null;

  function handleClickOutside(event: MouseEvent) {
    if (!open) return;
    if (menuRef && !menuRef.contains(event.target as Node)) {
      closeMenu();
    }
  }
    function toggleMenu() {
        open = !open;
    }

    function closeMenu() {
        open = false;
    }

</script>

<svelte:window on:click={handleClickOutside} />

<div class="profile-menu" bind:this={menuRef}>
  <button class="profile-icon" onclick={toggleMenu} aria-label="Open profile menu">

    <!-- Simple user icon (SVG) -->
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#ccc"/>
      <circle cx="16" cy="13" r="6" fill="#fff"/>
      <ellipse cx="16" cy="24" rx="8" ry="5" fill="#fff"/>
    </svg>

  </button>
  {#if open}
    <div class="menu">
      <div class="user-email">{supabase.auth.user?.email}</div>
      <a href="/profile" onclick={closeMenu}>Profile</a>
      <a href="/settings" onclick={closeMenu}>Settings</a>
      <a href="/feedback" onclick={closeMenu}>Feedback</a>
      <a href="/logout" onclick={closeMenu}>Logout</a>
    </div>
  {/if}
</div>

<style>
.profile-menu {
  position: relative;
  display: inline-block;
}

.profile-icon {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 50%;
  transition: background 0.2s;
}

.menu {
  position: absolute;
  right: 0;
  top: 110%;
  background: var(--card-bg, #fff);
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  min-width: 180px;
  z-index: 100;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
}

.menu a {
  padding: 0.5rem 1rem;
  color: #333;
  text-decoration: none;
  transition: background 0.15s;
}
.menu a:hover {
  background: #f5f5f5;
}

.user-email {
  padding: 0.5rem 1rem;
  font-size: 0.95rem;
  color: #888;
  border-bottom: 1px solid #eee;
  margin-bottom: 0.25rem;
}
</style>