<script>
  let { children } = $props()
</script>

<header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>

{@render children()}

<style>
  header {
    background-color: #f8f9fa;
    padding: 1rem;
    text-align: center;
  }

  nav a {
    margin: 0 1rem;
    text-decoration: none;
    color: #007bff;
  }

  nav a:hover {
    text-decoration: underline;
  }
</style>
