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
  <div class="profile-button">私</div>
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
.profile-button {
  font-family: var(--sawarabi-mincho);
  font-size: 1.25rem;
  color: #2c2c2c;
  background-color: #f2ebe2;
  border-radius: 9999px;
  border: 2px solid #b03a48;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu {
  position: absolute;
  right: 0;
  top: 110%;
  background: var(--color2);
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
  color: white;
  text-decoration: none;
  transition: background 0.15s;
}
.menu a:hover {
  background: var(--color3);
}

.user-email {
  padding: 0.5rem 1rem;
  font-size: 0.95rem;
  color: #888;
  border-bottom: 1px solid #eee;
  margin-bottom: 0.25rem;
}
</style>