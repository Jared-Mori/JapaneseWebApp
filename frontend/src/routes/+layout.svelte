<script>
    let { children } = $props();
</script>

<nav class="top-bar blank">
    <!-- for later stuff -->
</nav>

{@render children()}

<style>
    :root {
        --background: #D6D7D9;
        --topbar: #0B1023;
        --card-bg: #EEEEEE;
        --input-bg: #BBE4E6;
        --header: #686667;
        --header-light: #787878;
    }
    nav {
        padding: 0;
        height: 50px;
        width: 100%;
        text-align: center;
        background-color: var(--topbar);
        position: fixed;
        top: 0;
        left: 0;
    }
</style>